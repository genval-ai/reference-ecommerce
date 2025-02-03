# Survey Management
Manages the creation, distribution, and analysis of surveys, including question management and response collection.

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `survey-management` |
| Capability Image | ![Survey Management Capability Small Image](./images/survey-management_small.png) |

## Capability Operations

<a name="create-survey"></a>
### Create Survey
Creates a new survey with specified questions and settings

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `create-survey` |

#### Input Schema
```json Create Survey operation input schema
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "questions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "questionText": {
            "type": "string"
          },
          "questionType": {
            "type": "string",
            "enum": [
              "multiple-choice",
              "text",
              "rating",
              "checkbox"
            ]
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "required": {
            "type": "boolean"
          }
        }
      }
    },
    "startDate": {
      "type": "string",
      "format": "date-time"
    },
    "endDate": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

#### Output Schema
```json Create Survey operation output schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
<a name="get-survey-responses"></a>
### Get Survey Responses
Retrieves all responses for a specific survey

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get-survey-responses` |

#### Input Schema
```json Get Survey Responses operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "pageSize": {
      "type": "integer"
    },
    "pageNumber": {
      "type": "integer"
    }
  }
}
```

#### Output Schema
```json Get Survey Responses operation output schema
{
  "type": "object",
  "properties": {
    "responses": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "responseId": {
            "type": "string"
          },
          "respondentId": {
            "type": "string"
          },
          "answers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "questionId": {
                  "type": "string"
                },
                "answer": {
                  "type": "string"
                }
              }
            }
          },
          "submittedAt": {
            "type": "string",
            "format": "date-time"
          }
        }
      }
    },
    "totalResponses": {
      "type": "integer"
    }
  }
}
```
<a name="update-survey"></a>
### Update Survey
Updates an existing survey's details and questions

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `update-survey` |

#### Input Schema
```json Update Survey operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "questions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "questionId": {
            "type": "string"
          },
          "questionText": {
            "type": "string"
          },
          "questionType": {
            "type": "string"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "required": {
            "type": "boolean"
          }
        }
      }
    },
    "status": {
      "type": "string"
    }
  }
}
```

#### Output Schema
```json Update Survey operation output schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "updated": {
      "type": "boolean"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
<a name="delete-survey"></a>
### Delete Survey
Deletes a survey and all its associated responses

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `delete-survey` |

#### Input Schema
```json Delete Survey operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "confirmDelete": {
      "type": "boolean"
    }
  }
}
```

#### Output Schema
```json Delete Survey operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "deletedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
<a name="submit-survey-response"></a>
### Submit Survey Response
Submits a response to a survey

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `submit-survey-response` |

#### Input Schema
```json Submit Survey Response operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "respondentId": {
      "type": "string"
    },
    "answers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "questionId": {
            "type": "string"
          },
          "answer": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

#### Output Schema
```json Submit Survey Response operation output schema
{
  "type": "object",
  "properties": {
    "responseId": {
      "type": "string"
    },
    "submitted": {
      "type": "boolean"
    },
    "submittedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```
