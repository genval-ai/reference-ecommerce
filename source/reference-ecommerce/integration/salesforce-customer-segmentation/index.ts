import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Connection, LoginResult, QueryResult } from 'jsforce';

// Define types for our operations
type CreateSegmentInput = {
  segmentName: string;
  criteria: Array<{
    attribute: string;
    operator: string;
    value: string;
  }>;
  description?: string;
};

type CreateSegmentOutput = {
  segmentId: string;
  segmentName: string;
  customerCount: number;
  status: string;
};

type AssignCustomersInput = {
  segmentId: string;
  customerIds: string[];
};

type AssignCustomersOutput = {
  successCount: number;
  failedCount: number;
  errors?: string[];
};

type AnalyzeSegmentInput = {
  segmentId: string;
  metrics?: string[];
};

type AnalyzeSegmentOutput = {
  segmentSize: number;
  demographics?: Record<string, any>;
  behaviors?: Record<string, any>;
  metrics?: Record<string, any>;
};

// Salesforce connection setup
const setupSalesforceConnection = async (): Promise<Connection> => {
  const conn = new Connection({
    loginUrl: 'https://login.salesforce.com'
  });

  const loginResult: LoginResult = await conn.login(
    process.env.SALESFORCE_USERNAME!,
    process.env.SALESFORCE_PASSWORD! + process.env.SALESFORCE_SECURITY_TOKEN!
  );

  console.log('Logged in successfully to Salesforce');
  return conn;
};

// Helper function to convert criteria to SOQL WHERE clause
const criteriaToSOQL = (criteria: CreateSegmentInput['criteria']): string => {
  return criteria.map(c => `${c.attribute} ${c.operator} '${c.value}'`).join(' AND ');
};

// Implementation of createSegment operation
const createSegment = async (input: CreateSegmentInput): Promise<CreateSegmentOutput> => {
  const conn = await setupSalesforceConnection();

  // Create a Campaign to represent the segment
  const campaignResult = await conn.sobject('Campaign').create({
    Name: input.segmentName,
    Description: input.description,
    Type: 'Customer Segment'
  });

  if (!campaignResult.success) {
    throw new Error('Failed to create segment in Salesforce');
  }

  // Query for customers matching the criteria
  const soql = `SELECT COUNT() FROM Contact WHERE ${criteriaToSOQL(input.criteria)}`;
  const queryResult: QueryResult<{}> = await conn.query(soql);

  return {
    segmentId: campaignResult.id,
    segmentName: input.segmentName,
    customerCount: queryResult.totalSize,
    status: 'Active'
  };
};

// Implementation of assignCustomers operation
const assignCustomers = async (input: AssignCustomersInput): Promise<AssignCustomersOutput> => {
  const conn = await setupSalesforceConnection();

  const results = await Promise.all(input.customerIds.map(customerId =>
    conn.sobject('CampaignMember').create({
      CampaignId: input.segmentId,
      ContactId: customerId
    })
  ));

  const successCount = results.filter(r => r.success).length;
  const failedCount = results.filter(r => !r.success).length;
  const errors = results.filter(r => !r.success).map(r => r.errors?.[0]?.message || 'Unknown error');

  return {
    successCount,
    failedCount,
    errors: errors.length > 0 ? errors : undefined
  };
};

// Implementation of analyzeSegment operation
const analyzeSegment = async (input: AnalyzeSegmentInput): Promise<AnalyzeSegmentOutput> => {
  const conn = await setupSalesforceConnection();

  // Get segment size
  const sizeQuery = `SELECT COUNT() FROM CampaignMember WHERE CampaignId = '${input.segmentId}'`;
  const sizeResult: QueryResult<{}> = await conn.query(sizeQuery);

  // Example queries for demographics and behaviors
  const demographicsQuery = `
    SELECT Account.Industry, COUNT(Id)
    FROM CampaignMember
    WHERE CampaignId = '${input.segmentId}'
    GROUP BY Account.Industry
  `;
  const behaviorQuery = `
    SELECT SUM(Amount) TotalAmount, AVG(Amount) AvgAmount
    FROM Opportunity
    WHERE AccountId IN (SELECT AccountId FROM CampaignMember WHERE CampaignId = '${input.segmentId}')
  `;

  const [demographicsResult, behaviorResult] = await Promise.all([
    conn.query(demographicsQuery),
    conn.query(behaviorQuery)
  ]);

  return {
    segmentSize: sizeResult.totalSize,
    demographics: demographicsResult.records,
    behaviors: behaviorResult.records[0],
    // Additional metrics could be added here based on the input.metrics
  };
];

// Main handler function
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');
    let result;

    switch (event.path) {
      case '/create-segment':
        result = await createSegment(body);
        break;
      case '/assign-customers':
        result = await assignCustomers(body);
        break;
      case '/analyze-segment':
        result = await analyzeSegment(body);
        break;
      default:
        throw new Error('Invalid path');
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};