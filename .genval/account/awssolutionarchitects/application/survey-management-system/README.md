# Survey Management System
An application for creating, managing, and distributing surveys to users

**Application Metadata**
| Property | Value |
|----------|------|
| Application Code | `survey-management-system` |
| Application Image | ![Survey Management System Application Square Image](./images/survey-management-system_small.png) |

## Application Features


### Survey Builder
Enables users to create and design surveys with various question types and formatting options

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `survey-builder` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Create New Survey | `create-survey` | survey administrator | create a new survey from scratch | I can begin collecting specific information from respondents |
| Add Survey Questions | `add-questions` | survey designer | add different types of questions to my survey | I can collect various types of responses from participants |
| Format Survey Layout | `format-survey` | survey designer | customize the layout and appearance of my survey | I can create a professional and engaging survey experience |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Survey Management | [`create-survey`](../../capability/survey#create-survey) | The create-survey operation perfectly matches the 'Create New Survey' story requirements, providing all necessary fields for basic survey creation. |
| Survey Management | [`update-survey`](../../capability/survey#update-survey) | The update-survey operation supports the 'Add Survey Questions' and 'Format Survey Layout' stories by allowing modification of existing surveys. |


### Survey Distribution
Allows users to distribute surveys via various channels and manage recipient lists

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `survey-distribution` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Email Survey Distribution | `email-survey` | survey administrator | send surveys to participants via email | I can reach my target audience efficiently |
| Manage Recipient Lists | `manage-recipients` | survey administrator | create and manage lists of survey recipients | I can organize and target specific groups of participants |
| Generate Survey Links | `generate-survey-link` | survey administrator | create shareable links to my survey | I can distribute my survey through various channels |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|


### Response Management
Provides tools for collecting, viewing, and analyzing survey responses

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `response-management` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| View Survey Responses | `view-responses` | survey analyst | view individual survey responses | I can review the feedback provided by participants |
| Export Response Data | `export-data` | survey analyst | export survey responses to different formats | I can analyze the data using external tools |
| Generate Response Reports | `generate-reports` | survey analyst | create summary reports of survey responses | I can easily understand and share survey results |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|
| Survey Management | [`get-survey-results`](../../capability/survey#get-survey-results) | This operation supports viewing responses and generating reports with its aggregated results functionality. |


### Survey Templates
Enables users to create, save, and reuse survey templates

**Feature Metadata**
| Property | Value |
|----------|------|
| Feature Code | `survey-templates` |

**User Stories**
| Title | Code | Role | Objective | Benefit |
|-----------|------------|----------|---------------|-------------|
| Save Survey Template | `save-template` | survey designer | save a survey as a reusable template | I can quickly create similar surveys in the future |
| Use Existing Template | `use-template` | survey designer | create a new survey from an existing template | I can save time when creating similar surveys |

**Capability Operation Use**
| Capability | Operation | Use Description |
|------------|-----------|-----------------|

