/*
  EDIT THIS FILE ONLY. The page (index.html) builds itself from it.
  - Add an item: copy a { ... } block inside a list and change the text.
  - Empty lists ([]) and empty text ("") are hidden on the page.
  - Tags on projects create the filter buttons automatically.
*/
const SITE = {
  name: "Syed Muzamil",
  title: "SAP Basis, BTP and S/4HANA Subject Matter Expert",
  location: "Bengaluru, India",
  summary: "I have run SAP Basis for 15 years and now design the layer around it: S/4HANA Private Cloud on RISE, BTP services, identity, disaster recovery and security. I write the runbooks, test strategies and architecture documents that let a small team operate a large landscape.",

  links: [
    { label: "Email", url: "mailto:muzamilsyed.ec@gmail.com" }
  ],

  highlights: [
    { value: "15 years",     label: "SAP Basis" },
    { value: "RISE",         label: "S/4HANA Private Cloud" },
    { value: "11 services",  label: "BTP security covered" },
    { value: "3 DR postures", label: "Cold, pilot light, active-active" }
  ],

  experience: [
    {
      role: "SAP Basis SME and Delivery Manager",
      company: "Product company",
      period: "Current",
      points: [
        "Sole SAP Basis expert for a landscape on RISE with SAP (S/4HANA Private Cloud) and a growing set of BTP services.",
        "Manage vendor IT consultants and own service delivery and integration projects, including a partner that runs day-to-day operations.",
        "Administer BTP: Integration Suite, AI Core, Cloud Identity Services (IAS/IPS), HANA Cloud, Datasphere and Enterprise Threat Detection.",
        "Set up SAP Secure Login Service for SAP GUI single sign-on and Cloud Connector connectivity.",
        "Planned the S/4HANA support package stack upgrade within RISE and built the vendor cost framework for it.",
        "Wrote the DR plans for S/4HANA Private Cloud and Cloud Connector, plus the ransomware response runbook."
      ]
    }
  ],

  skills: [
    { group: "SAP Basis", items: ["S/4HANA", "SAP HANA", "RISE operations", "Upgrades and SPS stacks", "Transport management", "Secure Login Service", "Cloud ALM"] },
    { group: "SAP BTP", items: ["Integration Suite", "Cloud Integration", "API Management", "AI Core", "HANA Cloud", "Datasphere", "Cloud Foundry", "Subaccount strategy", "Cloud Connector", "Forms Service"] },
    { group: "Security and identity", items: ["IAS / IPS", "BTP security design", "Enterprise Threat Detection", "Authorization concepts", "Ransomware response"] },
    { group: "Architecture and resilience", items: ["Disaster recovery design", "Network architecture", "Terraform for BTP", "Governance frameworks", "Test strategy", "Vendor management"] },
    { group: "AI and tooling", items: ["LLM backends on AI Core", "Document AI", "Claude", "draw.io", "Python document tooling"] }
  ],

  projects: [
    {
      title: "Invoice capture on BTP",
      description: "An application that reads invoices with LLM models on AI Core and writes the result back to SAP.",
      tags: ["Build"],
      stack: ["AI Core", "Cloud Foundry", "LLM"],
      details: [
        "Runs on Cloud Foundry with AI Core hosting the LLM backends.",
        "Posts validated data back to the SAP system.",
        "Security architecture designed alongside the build."
      ]
    },
    {
      title: "Cross-region disaster recovery strategy",
      description: "A DR design for SAP and BTP, structured around three recovery postures.",
      tags: ["Architecture"],
      stack: ["DR", "RISE", "Cloud Connector"],
      details: [
        "Compares Cold Standby, Pilot Light and Active-Active on cost against recovery time.",
        "Covers S/4HANA Private Cloud and Cloud Connector."
      ]
    },
    {
      title: "BTP subaccount segregation model",
      description: "Multi-subaccount design for an organization of about 5,000 employees.",
      tags: ["Architecture"],
      stack: ["BTP", "Governance"],
      details: [
        "Governance frameworks for AI Core, Build, Work Zone and Process Automation.",
        "Delivered as Word documents for architecture review."
      ]
    },
    {
      title: "BTP security best practices",
      description: "A security guide spanning eleven BTP services plus Cloud Identity Services.",
      tags: ["Architecture", "Operations"],
      stack: ["IAS/IPS", "Hardening"],
      details: [
        "Per-service hardening, roles and monitoring guidance.",
        "Covers IAS and IPS trust and provisioning."
      ]
    },
    {
      title: "RISE network architecture diagram",
      description: "A network view of the RISE landscape and its BTP connections.",
      tags: ["Architecture"],
      stack: ["draw.io", "Networking"],
      details: ["Built in draw.io, exported as editable source and PNG."]
    },
    {
      title: "Operations runbook library",
      description: "Runbooks for BTP administration, disaster recovery and ransomware response.",
      tags: ["Operations"],
      stack: ["Runbooks", "Incident response"],
      details: [
        "Step-by-step procedures written for a partner team to execute.",
        "Includes a RISE ransomware incident runbook."
      ]
    },
    {
      title: "ADS to BTP Forms Service migration",
      description: "A test strategy for moving from Adobe Document Services to the BTP Forms Service.",
      tags: ["Operations"],
      stack: ["Forms Service", "Testing"],
      details: ["Test scope, cases and cutover checks for output forms."]
    },
    {
      title: "Cloud ALM configuration and security analysis",
      description: "Leadership decks and an operations capability overview for SAP Cloud ALM.",
      tags: ["Operations"],
      stack: ["Cloud ALM", "CSA"],
      details: [
        "Focus on the Configuration and Security Analysis feature.",
        "A full Cloud ALM operations capability deck."
      ]
    },
    {
      title: "5-year Basis transformation roadmap",
      description: "A roadmap for CFO-level discussion on where the Basis function goes as workloads move to the cloud.",
      tags: ["Architecture"],
      stack: ["Roadmap", "Operating model"]
    },
    {
      title: "Terraform for BTP and API guides",
      description: "Infographic guides that explain infrastructure as code and APIs for SAP people.",
      tags: ["Side projects"],
      stack: ["Terraform", "APIs"]
    },
    {
      title: "Topographic maps of India and Karnataka",
      description: "Geospatial mapping work on terrain and regions.",
      tags: ["Side projects"],
      stack: ["Geospatial", "Maps"]
    }
  ],

  certifications: [
    { name: "SAP Business AI Platform Solution Architect (C_BAIPA)", issuer: "SAP", year: "In progress" }
  ],

  education: []
};
