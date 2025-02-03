# Survey Management with Google Forms
Integrate survey management capabilities with Google Forms to create, manage, and collect responses for surveys using Google's robust forms platform.

### Integration Metadata
| Property | Value |
|----------|------|
| Integration Code | `survey-management-forms` |

### Capability
| Property | Value |
|----------|------|
| Capability Name | [Survey Management](../../capability/survey-management) |
| Capability Code | `survey-management` |
| Capability Image | ![Survey Management Capability Square Image](../../capability/survey-management/images/survey-management_square.png) |

### Provider Connection Type
| Property | Value |
|----------|------|
| Provider Name | [Google Forms](../../provider/google-forms) |
| Provider Code | `google-forms` |
| Provider Image | ![Google Forms Provider Square Image](../../provider/google-forms/images/google-forms_square.png) |
| Connection Type Name | [Google Forms API Connection](../../provider/google-forms#google-forms-api) |
| Connection Type Code | `google-forms-api` |

## Integration Instructions
# Survey Management Integration with Google Forms

This integration enables seamless interaction with Google Forms using the Survey Management capability. Authentication requires both an [api_key](../../provider/google-forms#google-forms-api_api_key) for API access and [oauth_credentials](../../provider/google-forms#google-forms-api_oauth_credentials) for user authentication.

## Authentication Setup
1. Configure the API key for application-level access
2. Setup OAuth 2.0 credentials with the following scopes:
   - https://www.googleapis.com/auth/forms.body
   - https://www.googleapis.com/auth/forms.responses.readonly

## Operation Implementations

### Create Survey
When implementing [create-survey](../../capability/survey-management#create-survey), map the capability's survey structure to Google Forms API:
- Map 'title' and 'description' directly to Form properties
- Transform each question in the 'questions' array to Google Forms items:
  - 'multiple-choice' → createChoiceQuestion()
  - 'text' → createTextQuestion()
  - 'rating' → createScaleQuestion()
  - 'checkbox' → createCheckboxQuestion()
- Set form settings using startDate/endDate for scheduling

### Get Survey Responses
Implement [get-survey-responses](../../capability/survey-management#get-survey-responses) using Google Forms API's response retrieval:
- Use forms.responses.list endpoint with provided surveyId
- Implement pagination using pageSize and pageToken
- Transform response format to match capability schema
- Cache responses when possible to optimize performance

### Update Survey
For [update-survey](../../capability/survey-management#update-survey) operations:
- Use forms.update endpoint with patch semantics
- Implement differential updates to modify only changed elements
- Handle question updates maintaining response integrity
- Update form settings based on status changes

### Delete Survey
Implement [delete-survey](../../capability/survey-management#delete-survey) with these considerations:
- Verify confirmDelete flag is true before proceeding
- Use forms.delete endpoint
- Ensure all associated responses are properly archived
- Handle permission checks before deletion

### Submit Response
For [submit-survey-response](../../capability/survey-management#submit-survey-response):
- Map answers to Google Forms response format
- Use forms.responses.create endpoint
- Handle required field validation
- Process respondentId as metadata

## Error Handling
Implement robust error handling for common scenarios:
- Authentication failures
- Rate limiting (respect Google's quotas)
- Permission issues
- Invalid question types
- Network timeouts

## Best Practices
1. Cache form metadata to reduce API calls
2. Batch operations when possible
3. Implement exponential backoff for retries
4. Validate all inputs before sending to Google Forms
5. Monitor API quota usage

Refer to Google Forms API documentation at https://developers.google.com/forms/api for detailed endpoint specifications and quota limits.

All date-time values should be handled in ISO 8601 format and converted appropriately for Google Forms API requirements.