// All page copy lives here. Edit this file to change what the site says.
// Rules: only facts supported by the CV, consultancy clients stay anonymous,
// no email, phone or address anywhere.

export const site = {
  name: 'Macauley',
  role: 'Power Platform Developer',
  url: 'https://macacodes.github.io',
  linkedin: 'https://www.linkedin.com/in/Macauley-Gibson',
  title: 'Macauley | Power Platform, automation and AI',
  description:
    'Power Platform developer building practical systems with automation, data, AI and careful UX/UI, from discovery through to production support.',
};

export type StageId = 'discover' | 'design' | 'build' | 'test' | 'release' | 'support';
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
  id: StageId;
  name: string;
  summary: string; // one short line under the stage name in the hero
  lead: string;
  points: string[];
  detailTitle: string;
  detail: string[];
}

export const stages: Stage[] = [
  {
    id: 'discover',
    name: 'Discover',
    summary: 'Requirements, pre-sales demos',
    lead: 'I start by understanding how people do the job now and what gets in their way.',
    points: [
      'I build demos for prospective clients using their own scenarios, so they can click through something real.',
      'For a Dynamics 365 rebuild I audited the legacy environment to decide what to keep, redesign, migrate or retire.',
      'On smaller Canvas apps I take the requirements myself, from the first conversation to user handover.',
    ],
    detailTitle: 'What that covers',
    detail: [
      'Pre-sales prototypes in Canvas apps, Dataverse, Power Pages, Code Apps and Power Automate.',
      'Legacy audit across the data model, apps, forms, JavaScript, automations and solution components.',
    ],
  },
  {
    id: 'design',
    name: 'Design',
    summary: 'Data model, security matrix',
    lead: 'On the contact-centre CRM I made the technical decisions on app structure, data model, security, integrations, performance and deployment.',
    points: [
      'I designed the security matrix for three user groups, built it in Dataverse, and project-managed its delivery with external teams.',
      'I designed a reference-allocation process so the same person keeps one reference across related records.',
      'Designs are written down: solution designs and field mappings that someone else can pick up.',
    ],
    detailTitle: 'How it is built',
    detail: [
      'Security: Dataverse security roles, owner teams and Entra ID group teams, designed for least-privilege access.',
      'Reference allocation: Dataverse autonumber values, alternate keys and reuse logic.',
    ],
  },
  {
    id: 'build',
    name: 'Build',
    summary: 'Canvas app, flows, integrations',
    lead: 'I wrote about 90% of the production Canvas app the contact centre works in. It has 230+ users and sits on nine million Dataverse records.',
    points: [
      'Contact search against a nine-million-row table took about two minutes. I got it under five seconds, a reduction of over 95%.',
      'Across clients I have built more than 40 Power Automate cloud flows, along with Azure Function Apps and API integrations.',
      'I also build model-driven custom pages. On one project I recovered and packaged command-bar work that had been left in unmanaged layers.',
    ],
    detailTitle: 'How the search was fixed',
    detail: [
      'Server-delegated Filter, StartsWith and SortByColumns queries, so Dataverse does the work and the app never pulls the table.',
      'DelayOutput on the search box and a minimum number of characters before a query runs.',
      'Model-driven work spans modern and classic commands, JavaScript web resources, RibbonDiffXml and solution dependencies.',
    ],
  },
  {
    id: 'test',
    name: 'Test',
    summary: '70+ formulas traced, UAT plan',
    lead: 'Before one launch I traced every formula in a multi-screen Canvas app that saved, deleted, called a flow or changed a collection. There were more than 70.',
    points: [
      'That review became a prioritised risk register. I delivered the fixes and wrote targeted UAT scenarios for each.',
      'I design the UAT approach for a release and present progress and demonstrations to stakeholders.',
    ],
    detailTitle: 'What the UAT approach includes',
    detail: [
      'Role-specific scenarios, regression tests, test data, acceptance evidence and issue tracking.',
    ],
  },
  {
    id: 'release',
    name: 'Release',
    summary: 'Pipelines, Dev to UAT to Prod',
    lead: 'I configure and run deployments across Dev, UAT and Production.',
    points: [
      'Every release goes out as a managed solution, with connection references and environment variables set per environment.',
      'I set up and project-manage the Azure DevOps projects around the work, using Boards, epics and user stories.',
      'Each release ships with a deployment checklist, release notes and handover documentation.',
    ],
    detailTitle: 'Tooling',
    detail: [
      'Power Platform Pipelines and Azure DevOps, with manual solution import and export where a pipeline is not the right fit.',
      'Power Platform CLI for environment management.',
    ],
  },
  {
    id: 'support',
    name: 'Support',
    summary: 'Urgent fixes, capacity clean-up',
    lead: 'I stay involved after go-live. If something breaks in production, I am often responding to the urgent case in under ten minutes.',
    points: [
      'I diagnose faults across Canvas apps, Dataverse, Power Automate and integrations.',
      'I led one client’s capacity remediation after about 60 GB of growth across database, file and audit storage.',
    ],
    detailTitle: 'How the capacity work ran',
    detail: [
      'In-depth reporting to agree the bulk-deletion scope with the client before anything was removed.',
      'Ongoing clean-up jobs set up afterwards, some of them using custom code.',
    ],
  },
];

export interface CaseStudy {
  icon: IconName;
  title: string;
  context: string;
  role: string;
  change: string;
  status: string;
  tech: string;
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    icon: 'windowDatabase',
    title: 'A contact-centre CRM built for scale',
    context:
      'A production CRM used by more than 230 people had to remain fast, secure and dependable across nine million Dataverse records.',
    role:
      'As primary developer, I wrote about 90% of the Canvas app and made the technical decisions on structure, data, security, integrations, performance and deployment.',
    change:
      'Contact search fell from about two minutes to under five seconds. I also traced more than 70 data-changing formulas, turned the findings into a risk register and fixes, and managed releases across Dev, UAT and Production.',
    status: 'In production. I continue to support it.',
    tech: 'Canvas apps, Dataverse, Power Fx, Power Automate, Power Platform Pipelines, Azure DevOps',
  },
  {
    icon: 'bot',
    title: 'Copilot agents for data entry in Teams',
    context:
      'Long, manual data-entry tasks were creating friction for people trying to keep business data up to date.',
    role:
      'I designed, built and released Copilot Studio agents in Teams, using grounded retrieval, explicit confirmation, human review and deterministic transactions for writes.',
    change:
      'People can now complete the work through a Copilot chat in Teams instead of a time-consuming manual process. Data entry is easier and each action is still controlled.',
    status: 'In production. I continue to support the agents.',
    tech: 'Copilot Studio, Dataverse MCP, Power Automate agent flows, custom tools, Microsoft Teams',
  },
  {
    icon: 'target',
    title: 'Lead generation with human review',
    context:
      'A consultancy needed a reliable way to find relevant opportunities while keeping a person in control of outreach.',
    role:
      'I built an internal tool around job-board APIs and automated the processing and campaign preparation, with a person reviewing before anything is sent.',
    change:
      'It produced around 250 qualified leads over nine months and fed them into active sequencing.',
    status: 'In use.',
    tech: 'Job-board APIs, workflow automation, human-in-the-loop review',
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
    title: 'Dataverse and SQL Server integration',
    body:
      'I designed and built an integration across Dataverse and two SQL Server databases. It uses a dedicated staging layer, with Azure Functions validating, transforming and synchronising the data.',
    result: 'In production. It saves time and keeps one source of truth across the connected systems.',
    tech: 'Dataverse, SQL Server, Azure Functions, C#/.NET',
  },
  {
    title: 'Two government API integrations',
    body:
      'I integrated two published APIs into Power Automate and Canvas apps. I later moved both to a newer API version, updating the endpoints, mappings, validation, error handling and dependent logic.',
    result: 'In production and still maintained.',
    tech: 'Power Automate, Canvas apps, REST APIs',
  },
  {
    title: 'WordPress order automation',
    body:
      'I am building a reusable parent-and-child flow pattern to replace spreadsheet processing across 25 order types and their custom fields.',
    result: 'In testing.',
    tech: 'WordPress, Power Automate, reusable cloud flows',
  },
  {
    title: 'Model-driven apps and operational data',
    body:
      'I have built custom pages, command bars, JavaScript web resources and dashboards. My wider data work includes high-volume SQL and FetchXML queries and a legacy Dynamics 365 audit.',
    result: 'Used across live delivery, reporting and modernisation work.',
    tech: 'Model-driven apps, Dynamics 365, JavaScript, Power BI, SQL, FetchXML',
  },
];

export const practices = [
  {
    icon: 'design' as IconName,
    title: 'How I approach UX/UI',
    body:
      'I use wireframes, reusable components, responsive design, accessibility checks, usability feedback and before-and-after redesigns. The aim is simple: make the solution easy to understand and good enough that people want to use it.',
  },
  {
    icon: 'shield' as IconName,
    title: 'Governance and standards',
    body:
      'I help maintain practical standards for environment and solution reviews. They cover ALM, naming, deployment, reusable components, backups, data retention, GDPR and least-privilege access.',
  },
  {
    icon: 'peopleChat' as IconName,
    title: 'Workshops and handover',
    body:
      'I have run five client discovery workshops, coached an apprentice for more than six months, and produced solution designs, review checklists, release notes, training and handover documentation.',
  },
];

export const skills: { group: string; icon: IconName; items: string }[] = [
  {
    group: 'Apps',
    icon: 'apps',
    items:
      'Canvas and model-driven apps, Power Fx, custom pages, Power Pages, Dynamics 365 CE, JavaScript form scripting, web resources and command bars.',
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
      'Dataverse data modelling, alternate keys and autonumbering, SQL Server, FetchXML, SQL 4 CDS, migration, bulk operations, capacity and retention management.',
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
      'Requirements, solution design, UAT strategy, regression testing, release management, client demonstrations, production support and Agile delivery.',
  },
];

export const journey: { when: string; what: string; body: string }[] = [
  {
    when: '2016 to 2023',
    what: 'Recruitment, talent and commercial roles',
    body: 'Technology recruitment, internal talent acquisition, executive search and sales across consulting, financial services and retail.',
  },
  {
    when: 'Early 2024',
    what: 'Full Stack Web Development bootcamp, The Growth Company',
    body: 'MERN stack, January to April. Followed by a Level 4 Software Developer qualification with BPP.',
  },
  {
    when: 'Mid 2024',
    what: 'Data Specialist, recruitment consultancy',
    body: 'Migrated data from a legacy applicant tracking system to a new Dynamics 365 CRM.',
  },
  {
    when: 'September 2024 to now',
    what: 'Power Platform Developer, Microsoft consultancy',
    body: 'Client work from pre-sales demonstrations through to production support.',
  },
];

export const qualifications: { name: string; note: string }[] = [
  { name: 'Microsoft Power Platform Developer Associate', note: 'In progress' },
  { name: 'Level 4 Software Developer, BPP', note: '2024 to 2025, Merit' },
  { name: 'Full Stack Web Development (MERN) bootcamp, The Growth Company', note: '2024' },
  { name: 'BA Social Sciences (Politics), University of Manchester', note: '2:1' },
  {
    name: 'Mandarin Chinese intensive course, National Taiwan Normal University',
    note: '2021, HESS Scholarship',
  },
  { name: 'Chinese Language and Business Culture, Zhejiang University', note: '2017' },
];
