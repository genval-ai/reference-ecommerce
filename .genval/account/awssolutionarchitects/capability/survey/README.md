# Survey Management
Capability for managing surveys, their questions, responses and analytics. 

**Capability Metadata**
| Property | Value |
|----------|------|
| Capability Code | `survey` |
| Capability Image | ![Survey Management Capability Small Image](./images/survey_small.png) |

## Capability Operations

<a name="create-survey"></a>
### Create Survey
Creates a new survey with basic information and questions

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
          "type": {
            "type": "string",
            "enum": [
              "multiple_choice",
              "text",
              "rating",
              "yes_no"
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
    }
  }
}
```
<a name="update-survey"></a>
### Update Survey
Updates an existing survey's information or questions

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
          "type": {
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
```json Update Survey operation output schema
{
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    }
  }
}
```
<a name="get-survey"></a>
### Get Survey
Retrieves a survey by its ID including all questions

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get-survey` |

#### Input Schema
```json Get Survey operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    }
  }
}
```

#### Output Schema
```json Get Survey operation output schema
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
          "type": {
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
    "startDate": {
      "type": "string"
    },
    "endDate": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  }
}
```
<a name="list-surveys"></a>
### List Surveys
Retrieves a list of all surveys with basic information

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `list-surveys` |

#### Input Schema
```json List Surveys operation input schema
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "pageSize": {
      "type": "integer"
    },
    "status": {
      "type": "string"
    }
  }
}
```

#### Output Schema
```json List Surveys operation output schema
{
  "type": "object",
  "properties": {
    "surveys": {
      "type": "array",
      "items": {
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
          "status": {
            "type": "string"
          },
          "responseCount": {
            "type": "integer"
          }
        }
      }
    },
    "totalCount": {
      "type": "integer"
    }
  }
}
```
<a name="delete-survey"></a>
### Delete Survey
Deletes a survey and all its associated data

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
    }
  }
}
```
<a name="submit-response"></a>
### Submit Survey Response
Submits a response to a survey

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `submit-response` |

#### Input Schema
```json Submit Survey Response operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "responses": {
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
    "success": {
      "type": "boolean"
    }
  }
}
```
<a name="get-survey-results"></a>
### Get Survey Results
Retrieves aggregated results and responses for a survey

**Operation Metadata**
| Property | Value |
|----------|------|
| Operation Code | `get-survey-results` |

#### Input Schema
```json Get Survey Results operation input schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "includeIndividualResponses": {
      "type": "boolean"
    }
  }
}
```

#### Output Schema
```json Get Survey Results operation output schema
{
  "type": "object",
  "properties": {
    "surveyId": {
      "type": "string"
    },
    "totalResponses": {
      "type": "integer"
    },
    "questionResults": {
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
          "aggregatedResults": {
            "type": "object"
          },
          "responses": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```
