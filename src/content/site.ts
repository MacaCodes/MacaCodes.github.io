// All page copy lives here. Edit this file to change what the site says.
// Rules: only facts supported by the CV, consultancy clients stay anonymous,
// no email, phone or address anywhere.

export const site = {
  name: 'Macauley',
  role: 'Power Platform Developer',
  location: 'Manchester, UK',
  url: 'https://macacodes.github.io',
  linkedin: 'https://www.linkedin.com/in/Macauley-Gibson',
  title: 'Macauley, Power Platform developer in Manchester',
  description:
    'Power Platform developer in Manchester. Canvas and model-driven apps, Power Automate, Dataverse, integrations and Copilot Studio agents, taken from requirements through to production support.',
};

export type StageId = 'discover' | 'design' | 'build' | 'test' | 'release' | 'support';

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
    lead: 'Before anything gets built I want to see how the work is done today, and who has to live with the result.',
    points: [
      'I build and present demonstrations for prospective clients, turning their scenario into a working prototype they can click through.',
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
      'On the model-driven side I build custom pages, and I recovered and packaged command-bar functionality that had been left in unmanaged layers.',
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
    lead: 'Before one launch I traced more than 70 formulas in a multi-screen Canvas app, every one that saved, deleted, called a flow or changed a collection.',
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
    lead: 'I stay on after go-live. When something breaks in production I am often responding to an urgent case in under ten minutes.',
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

export interface Project {
  id: string;
  title: string;
  status: string; // plain sentence: production, internal, etc.
  body: string[];
  covered: StageId[];
  tech: string;
}

export const projects: Project[] = [
  {
    id: 'sql-integration',
    title: 'Dataverse and SQL Server integration',
    status: 'Client work. I designed and built it.',
    body: [
      'An integration between Dataverse and two SQL Server databases, one of them a dedicated staging layer. Azure Function Apps automate validation, transformation and synchronisation across the three stores.',
    ],
    covered: ['design', 'build'],
    tech: 'Dataverse, SQL Server, Azure Function Apps, C#/.NET',
  },
  {
    id: 'copilot-agents',
    title: 'Copilot Studio agents',
    status: 'In production. I designed, built and released them, and still support them.',
    body: [
      'The agents answer from grounded retrieval and ask for confirmation before they act. A person stays in the loop for anything that matters, and writes go through deterministic transactions instead of being left to the model.',
    ],
    covered: ['design', 'build', 'release', 'support'],
    tech: 'Copilot Studio, Dataverse MCP, Power Automate agent flows, custom tools',
  },
  {
    id: 'government-apis',
    title: 'Two government APIs',
    status: 'In production. I integrated them and still maintain them.',
    body: [
      'Both were integrated from the published documentation, through Power Automate and Canvas apps. When a newer API version arrived I managed the move across endpoints, mappings, validation, error handling and the logic that depended on them.',
    ],
    covered: ['build', 'support'],
    tech: 'Power Automate, Canvas apps, REST APIs, try/catch/finally error handling',
  },
  {
    id: 'lead-generation',
    title: 'Lead-generation tool',
    status: 'Internal tool at CRM Knowledge. In use and generating leads.',
    body: [
      'A business development tool built on job board APIs, with a largely automated outbound campaign process around it. A person reviews before anything is sent.',
    ],
    covered: ['build'],
    tech: 'Job board APIs, automation with human-in-the-loop review',
  },
];

export const skills: { group: string; items: string }[] = [
  {
    group: 'Apps',
    items:
      'Canvas and model-driven apps, Power Fx, custom pages, Power Pages, Dynamics 365 CE, JavaScript form scripting, web resources and command bars.',
  },
  {
    group: 'Automation',
    items:
      'Power Automate cloud flows, Azure Functions in C#/.NET, business rules and business process flows.',
  },
  {
    group: 'Data',
    items:
      'Dataverse data modelling, alternate keys and autonumbering, SQL Server, FetchXML, SQL 4 CDS, migration, bulk operations, capacity and retention management.',
  },
  {
    group: 'Integrations and AI',
    items:
      'REST APIs, Dataverse Web API, OData, custom connectors, SharePoint, Xero, Copilot Studio, AI Builder, MCP and agent orchestration.',
  },
  {
    group: 'ALM and security',
    items:
      'Managed solutions, Power Platform Pipelines, Azure DevOps, Power Platform CLI, Git, environment variables, connection references, security roles, owner teams and Entra ID group teams.',
  },
  {
    group: 'Delivery',
    items:
      'Requirements, solution design, UAT strategy, regression testing, release management, client demonstrations, production support and Agile delivery.',
  },
];

export const journey: { when: string; what: string; body: string }[] = [
  {
    when: '2016 to 2023',
    what: 'Recruitment, talent and commercial roles',
    body: 'Six years of requirements gathering and stakeholder management across technology recruitment, internal talent acquisition, executive search and sales. Employers included Wiley Edge, Interactive Investor, The Chat Shop, Bó Lè Associates, Sopra Steria, Edison Pope, APS Group, Co-op and John Lewis, with clients such as Amazon, EY, Argos and Sainsbury’s. At Wiley Edge I supported the Greenhouse implementation, which helped raise application completion by 30%, and delivered cohorts of STEM graduates into roles at UBS, Morgan Stanley, NatWest Markets and JP Morgan.',
  },
  {
    when: 'Early 2024',
    what: 'Full Stack Web Development bootcamp, The Growth Company',
    body: 'A MERN stack bootcamp from January to April, followed by a Level 4 Software Developer qualification with BPP.',
  },
  {
    when: 'Mid 2024',
    what: 'Data Specialist, The Talent Crowd',
    body: 'Managed the data migration from a legacy applicant tracking system to a new Dynamics 365 CRM, including data mapping, transformation logic and a categories and skills taxonomy.',
  },
  {
    when: 'September 2024 to now',
    what: 'Power Platform Developer, CRM Knowledge',
    body: 'A Dynamics 365 and Power Platform consultancy. I work directly with clients, from pre-sales demonstrations through to production support.',
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
