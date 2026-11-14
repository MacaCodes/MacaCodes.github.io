// All page copy lives here. Edit this file to change what the site says.
// Rules: only facts supported by the CV, consultancy clients stay anonymous,
// no email, phone or address anywhere.

export const site = {
  name: 'Macauley',
  role: 'Power Platform Developer',
  url: 'https://macacodes.github.io',
  linkedin: 'https://www.linkedin.com/in/Macauley-Gibson',
  title: 'Macauley | Power Platform Developer in Manchester',
  description:
    'Power Platform developer in Manchester building production systems with Dataverse, automation, AI and thoughtful UX/UI.',
  location: 'Manchester, UK',
};

export type IconName =
  | 'apps'
  | 'flow'
  | 'database'
  | 'plug'
  | 'shield'
  | 'people'
  | 'peopleChat'
  | 'bot'
  | 'target'
  | 'design'
  | 'windowDatabase';

export interface Stage {
  name: string;
}

export const stages: Stage[] = [
  { name: 'Discover' },
  { name: 'Design' },
  { name: 'Build' },
  { name: 'Test' },
  { name: 'Release' },
  { name: 'Support' },
];

export interface CaseStudy {
  icon: IconName;
  title: string;
  context: string;
  role: string;
  change: string;
  status: string;
  tech: string;
  visual?: 'crm' | 'integration' | 'copilot';
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    icon: 'windowDatabase',
    title: 'A contact-centre CRM built for scale',
    context:
      'A production CRM used by more than 230 people had to remain fast, secure and dependable across nine million Dataverse records.',
    role:
      'As the primary developer, I built the Canvas app and owned the wider Dataverse solution. That included the model-driven CRM, tables, case processes, reporting, year-end data reports, security, integrations and deployments.',
    change:
      'Contact search fell from about two minutes to under five seconds. I kept it delegable with Filter, StartsWith and SortByColumns, then used DelayOutput and a minimum character threshold to avoid unnecessary Dataverse requests. I also traced more than 70 data-changing formulas, prioritised the risks and delivered the fixes.',
    status: 'In production. I continue to support it.',
    tech: 'Canvas and model-driven apps, Dataverse, Power Fx, Power Automate, Power Platform Pipelines, Azure DevOps',
    visual: 'crm',
  },
  {
    icon: 'database',
    title: 'Warehouse scanner integration with Dataverse',
    context:
      'A warehouse scanner already wrote daily scan data to a MySQL database. The existing process could not be changed or made dependent on Dataverse being available.',
    role:
      'I designed and built the hourly, one-way C# Azure Function. The scanner was already part of a working warehouse process, so I kept it independent and pulled new MySQL records into Dataverse instead. The function validates and transforms each record, then uses alternate-key upserts to prevent duplicates.',
    change:
      'About 1,000 warehouse scan records now reach Dataverse each day through the hourly sync, replacing separate imports and giving around 20 users up-to-date operational data.',
    status: 'In production.',
    tech: 'AWS-hosted MySQL, Azure Functions, C#/.NET, Dataverse, Power Automate',
    visual: 'integration',
  },
  {
    icon: 'bot',
    title: 'Copilot agents for data entry in Teams',
    context:
      'Time tracking and case management involved repetitive manual data entry.',
    role:
      'I designed and released Copilot Studio agents for time tracking and case management in Teams. They retrieve relevant Dataverse records, ask for missing information and help users select the right subscription. A deterministic agent flow writes only after the user reviews the required fields.',
    change:
      'Time-tracking and case-management entries now take around 20 seconds instead of three minutes. The production agents have handled hundreds of requests while retaining user confirmation before every write.',
    status: 'In production. I continue to support the agents.',
    tech: 'Copilot Studio, Dataverse MCP, Power Automate agent flows, custom tools, Microsoft Teams',
    visual: 'copilot',
  },
];

export interface DeliveredSystem {
  title: string;
  body: string;
  result: string;
  tech: string;
}

export const deliveredSystems: DeliveredSystem[] = [
  {
    title: 'CRM rebuilds and migrations',
    body:
      'Across several Dynamics 365 and Dataverse CRM rebuilds, I have audited legacy solutions and redesigned model-driven forms, views and navigation. I have also planned data and Outlook mailbox migrations, mapped fields, configured security roles, and rebuilt automations and integrations.',
    result:
      'In production. Around 35% of audited legacy components retired. The redesign improved the user experience and simplified ongoing maintenance.',
    tech: 'Model-driven apps, Dynamics 365, Dataverse, data migration, security, Power Automate, integrations',
  },
  {
    title: 'Two government API integrations',
    body:
      'I integrated two public-data APIs through Power Automate and Canvas apps, writing the results to Dataverse so users can answer campaign queries without moving between systems. I later migrated both integrations to a newer API version, updating endpoints, mappings, validation, error handling and dependent logic.',
    result: 'In production. Public data brought into Dataverse for faster campaign queries.',
    tech: 'Power Automate, Canvas apps, REST APIs',
  },
  {
    title: 'WordPress to Dynamics 365 order automation',
    body:
      'I am building a reusable parent-and-child flow pattern that brings WordPress orders into Dynamics 365, replacing spreadsheet processing across 25 order types and their custom fields.',
    result: 'In testing. Replacing spreadsheet processing across 25 order types.',
    tech: 'WordPress, Power Automate, reusable cloud flows',
  },
  {
    title: 'Dynamics 365 lead generation and campaign automation',
    body:
      'I connected job-board APIs to Dynamics 365 leads and ClickDimensions campaigns, supported by a SharePoint go-to-market process I designed and mapped. A person reviews everything before sending as part of the human-in-the-loop design.',
    result: 'In use. Around 250 qualified leads over nine months.',
    tech: 'Dynamics 365, ClickDimensions, SharePoint, job-board APIs, human review',
  },
];

export const productionEvidence = [
  'Built more than 40 Power Automate cloud flows across client projects.',
  'Led Dataverse capacity remediation after about 60 GB of database, file and audit growth.',
  'Set up and managed Azure DevOps project structures for client delivery.',
  'Designed and implemented a Dataverse security matrix for three user groups.',
];

export const skills: { group: string; icon: IconName; items: string }[] = [
  {
    group: 'Apps and UX/UI',
    icon: 'apps',
    items:
      'Canvas and model-driven apps, Power Fx, custom pages, Code Apps, Power Pages prototypes, Dynamics 365 CE, JavaScript, web resources and command bars. I also work with wireframes, reusable components, accessibility checks and usability feedback.',
  },
  {
    group: 'Automation',
    icon: 'flow',
    items:
      'Power Automate cloud flows, Azure Functions in C#/.NET, business rules and business process flows.',
  },
  {
    group: 'Data',
    icon: 'database',
    items:
      'Dataverse data modelling, alternate keys and autonumbering, SQL Server, MySQL, FetchXML, SQL 4 CDS, migration, bulk operations, capacity and retention management.',
  },
  {
    group: 'Integrations and AI',
    icon: 'plug',
    items:
      'REST APIs, Dataverse Web API, OData, custom connectors, SharePoint, Xero, Copilot Studio, AI Builder, MCP and agent orchestration.',
  },
  {
    group: 'ALM and security',
    icon: 'shield',
    items:
      'Managed solutions, Power Platform Pipelines, Azure DevOps, Power Platform CLI, Git, environment variables, connection references, security roles, owner teams and Entra ID group teams.',
  },
  {
    group: 'Delivery',
    icon: 'people',
    items:
      'Discovery workshops, requirements, process mapping, interactive pre-sales prototypes, solution design, risk-based UAT, regression testing, release documentation, client demonstrations, handover and production support.',
  },
];

export const journey: { when: string; what: string; body: string }[] = [
  {
    when: 'September 2024 to now',
    what: 'Power Platform Developer, Microsoft consultancy',
    body:
      'Client-facing Power Platform and Dynamics 365 work, from pre-sales and requirements through to release and production support. I design and build apps, automation, integrations and Copilot agents, coordinate delivery through Azure DevOps and our internal Dynamics 365 system, and have coached an apprentice for over six months.',
  },
  {
    when: 'Mid 2024',
    what: 'Data Specialist, recruitment consultancy',
    body: 'Migrated data from a legacy applicant tracking system to a new Dynamics 365 CRM.',
  },
  {
    when: 'Early 2024',
    what: 'Full Stack Web Development bootcamp, The Growth Company',
    body: 'MERN stack, January to April. Followed by a Level 4 Software Developer qualification with BPP.',
  },
  {
    when: 'Earlier career',
    what: 'Recruitment, talent and commercial roles',
    body: 'Technology recruitment, internal talent acquisition, executive search and sales across consulting, financial services and retail.',
  },
];

export const qualifications: { name: string; note: string }[] = [
  { name: 'Microsoft Power Platform Developer Associate (AB-400)', note: 'In progress' },
  { name: 'Level 4 Software Developer, BPP', note: '2024 to 2025, Merit' },
  { name: 'Full Stack Web Development (MERN) bootcamp, The Growth Company', note: '2024' },
  { name: 'BA Social Sciences (Politics), University of Manchester', note: '2:1' },
  {
    name: 'Mandarin Chinese intensive course, National Taiwan Normal University',
    note: '2021, HESS Scholarship',
  },
  { name: 'Chinese Language and Business Culture, Zhejiang University', note: '2017' },
];
