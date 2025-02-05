# Oracle Cloud Infrastructure
Complete Cloud Infrastructure — Optimize your cloud infrastructure capabilities with a multicloud configuration from OCI. OCI offers a range of deployment options such as edge computing, on-premises, 

**Provider Metadata**
| Property | Value |
|----------|------|
| Provider Code | `oci` |
| Provider Image |![Oracle Cloud Infrastructure Provider Small Image](./images/oci_small.png) |

## Provider Connection Types

<a name="oci-integrated"></a>
### OCI Integrated Authentication
Uses integrated authentication where the code runs inside OCI and can assume a role for authentication. No credentials needed as authentication is handled through OCI's role-based access.

**Connection Type Metadata**
| Property | Value|
|----------|------|
| Connection Type Code | `oci-integrated` |

<a name="oci-integrated_region"></a>
#### Region
The OCI region where the service is located (e.g., us-phoenix-1, us-ashburn-1)

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `region` |
| IsSecret | False |
| Property Level | client |
| Requried | True |
| Example Value | us-phoenix-1 |

<a name="oci-integrated_tenancy_ocid"></a>
#### Tenancy OCID
The OCID (Oracle Cloud Identifier) of your tenancy

**Connection Property Metadata**
| Property | Value|
|----------|------|
| Property Code | `tenancy_ocid` |
| IsSecret | False |
| Property Level | client |
| Requried | True |
| Example Value | ocid1.tenancy.oc1..unique_ID |



