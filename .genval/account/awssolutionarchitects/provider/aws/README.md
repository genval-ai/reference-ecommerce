# AWS
AWS

**Provider Metadata**
| Property | Value |
|----------|------|
| Provider Code | `aws` |
| Provider Image |![AWS Provider Small Image](./images/aws_small.png) |

## Provider Connection Types

<a name="aws_iam"></a>
### IAM Integration for AWS
Connect to AWS using IAM authentication for secure access management and resource control

**Connection Type Metadata**
| Property | Value|
|----------|------|
| Connection Type Code | `aws_iam` |

<a name="aws_iam_access_key_id"></a>
#### AWS Access Key ID
The AWS access key ID used for authentication

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `access_key_id` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | AKIAIOSFODNN7EXAMPLE |

<a name="aws_iam_secret_access_key"></a>
#### AWS Secret Access Key
The AWS secret access key used for authentication

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `secret_access_key` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY |

<a name="aws_iam_region"></a>
#### AWS Region
The AWS region where your resources are located

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `region` |
| IsSecret | False |
| Property Level | client |
| Requried | False |
| Example Value | us-east-1 |

<a name="aws_iam_role_arn"></a>
#### IAM Role ARN
The Amazon Resource Name (ARN) of the IAM role to assume

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `role_arn` |
| IsSecret | False |
| Property Level | identity |
| Requried | False |
| Example Value | arn:aws:iam::123456789012:role/example-role |



