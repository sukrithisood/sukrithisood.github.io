// src/data/governance.js
export const governanceIntro = `MRF operating models can be understood along two defining dimensions: ownership and collection responsibility, which together determine how value is created, captured, and operationalised across the system. The intersection of these dimensions gives rise to distinct models, each suited to different city contexts, institutional capacities, and system maturity levels.`

export const governanceDimensions = [
  { label: 'Ownership and Revenue Model', body: 'Defines who owns the facility/MRF assets and captures value from recovered materials.' },
  { label: 'Collection and Transportation Responsibility', body: 'Defines who is responsible for waste collection and its delivery to the MRF.' },
]

export const governanceModels = [
  {
    id: 'pvt',
    badge: 'Private',
    context: 'Independent / EPR-funded',
    title: 'Privately held and operated',
    nuance: 'A fully independent model where a private operator owns and manages the MRF, often supported by EPR-linked partnerships or commercial waste streams.',
    bestFit: [
      'Urban areas with formal waste streams and reliable fee collection mechanisms (user fees or tipping fees)',
      'Metro fringe zones and industrial clusters with strong EPR-driven demand',
      'Common for plastic MRFs and e-waste centres, with rapid growth following the EPR Rules',
    ],
    pros: [
      'High operational efficiency driven by commercial incentives',
      'Greater agility and flexibility in decision-making',
      'Strong potential for innovation and scalable models',
    ],
    cons: [
      'Tendency to prioritise high-value material streams, potentially excluding low-value waste',
      'Limited incentives to serve low-density or underserved areas',
      'Challenges in accessing land and public resources; absence of a public funding buffer',
      'High exposure to feedstock supply variability and commodity price cycles',
    ],
  },
  {
    id: 'concession',
    badge: 'PPP Concessionaire',
    context: 'DBFOT / BOOT',
    title: 'Public-Private Partnership Concessionaire',
    nuance: 'The ULB provides land and/or capital support, while a private operator handles design, build, finance, and operation (DBFOT/BOOT) of the MRF. The operator typically captures revenue from recovered materials, with additional support through tipping fees or guaranteed tonnage.',
    bestFit: [
      'Mid-sized and large cities where the ULB can provide land and institutional support',
      'Contexts requiring private investment and operational expertise, backed by adequate ULB capacity for contract management',
    ],
    pros: [
      "Blends public legitimacy with the private sector's operational agility",
      'Enables risk-sharing across capital investment and operations',
      'Reduces upfront financial burden on ULBs due to private CAPEX, with often better operational efficiency',
    ],
    cons: [
      'Contract design is critical — poorly designed agreements can create disputes, especially around revenue ownership',
      'Potential accountability gaps between public and private stakeholders',
      'Tipping fee structures can create fiscal pressure for ULBs',
    ],
    keyConsideration: 'Clearly specify in the MoU the ownership of recovered material value, bearing of RDF disposal costs, and how collection fee shortfalls are handled.',
  },
  {
    id: 'om',
    badge: 'PPP O&M',
    context: 'Public asset, private operations',
    title: 'Public-Private Partnership O&M',
    nuance: 'The ULB owns and has developed the MRF infrastructure, while a private operator is engaged to manage day-to-day operations through a management fee or revenue-sharing arrangement. Collection may remain with the ULB or be outsourced separately.',
    bestFit: [
      'Cities that have established MRF infrastructure (e.g., through AMRUT/SFC funding) but lack operational expertise',
      'Common in Tier-2 and emerging urban centres',
    ],
    pros: [
      'Faster to operationalise compared to concessionaire models',
      'Lower contractual complexity',
      'Easier to exit or replace operators in case of underperformance',
    ],
    cons: [
      'Split ownership-operations can create blame diffusion',
      'Limited revenue incentives for operators may impact performance',
      'Requires strong monitoring and oversight capacity from the ULB',
    ],
  },
  {
    id: 'hybrid',
    badge: 'Hybrid',
    context: 'Private MRF + public feedstock',
    title: 'Private MRF with Public Collection Linkage',
    nuance: 'A privately owned and operated MRF that relies on the ULB or contracted municipal systems for feedstock supply. The operator primarily earns through material sales and may have limited formal contractual linkage with the ULB.',
    bestFit: [
      'Urban and peri-urban areas where private operators have access to land and processing capacity, but depend on municipal systems for consistent feedstock',
      'Transitional markets where full PPP structures are not yet established',
    ],
    pros: [
      'High operational efficiency driven by private ownership',
      'Market-oriented decision-making and flexibility',
      'Lower dependency on complex public contracts',
    ],
    cons: [
      'Dependence on consistency and quality of feedstock supplied by ULB systems',
      'Limited control over upstream collection and segregation',
      'Potential vulnerability to supply disruptions or policy changes',
    ],
  },
  {
    id: 'coop',
    badge: 'Cooperative',
    context: 'Waste-picker owned',
    title: 'Waste-picker cooperative',
    nuance: 'An organised collective of waste pickers owns and operates the MRF as a social enterprise, often supported by NGOs or ULBs through land access, initial capital, and institutional linkages. Revenue is shared among members.',
    bestFit: [
      'Dense urban wards with established informal sector networks',
      'Contexts with 100–300+ organised waste pickers and strong NGO facilitation',
    ],
    pros: [
      'Promotes worker ownership, inclusion, and livelihood security',
      'Lower labour cost structures due to cooperative model',
      'Strong alignment with social impact and circular economy goals',
    ],
    cons: [
      'Limited scalability beyond 1–2 wards or clusters',
      'Challenges in accessing capital and scaling infrastructure',
      'Requires sustained institutional support (NGO/ULB) for stability',
    ],
  },
  {
    id: 'ulb',
    badge: 'ULB-model',
    context: 'Fully public',
    title: 'ULB-Operated',
    nuance: 'The ULB owns and manages the entire system, including collection, MRF operations, and revenue capture from recyclables, without private sector involvement.',
    bestFit: [
      'Cities with strong municipal capacity, political will, and stable budget allocation',
      'Contexts where the ULB seeks full control over waste management systems',
    ],
    pros: [
      'Backed by public funding and institutional authority',
      'Strong alignment with regulatory and policy objectives',
      'Easier access to land and integration with municipal systems',
      'Greater potential for integrating informal workers into formal systems',
    ],
    cons: [
      'Lower operational flexibility and slower decision-making',
      'Workforce governed by public systems, limiting performance-based incentives',
      'Limited scope for innovation and efficiency improvements compared to private-led models',
    ],
  },
]

// Append to existing src/data/governance.js

export const governanceSpectrum = [
  { id: 'private',    label: 'Private',           color: 'var(--primary)' },
  { id: 'concession', label: 'PPP Concessionaire', color: '#5B7BD6' },
  { id: 'om',         label: 'PPP O&M',           color: '#1A56DB' },
  { id: 'hybrid',     label: 'Hybrid',            color: '#9D7FCB' },
  { id: 'coop',       label: 'Cooperative',       color: 'var(--success)' },
  { id: 'ulb',        label: 'ULB-model',         color: '#1F2A6B' },
]

// Bubble positions on a 0–100 grid.
// X axis: 0 = public ownership, 100 = private ownership
// Y axis: 0 = public collection, 100 = private collection
// `size` is the bubble diameter as a % of the chart's smaller dimension.
export const governanceBubbles = [
  { id: 'private',    label: 'Private',           x: 88, y: 88, size: 14, color: 'var(--primary)' },
  { id: 'concession', label: 'PPP\nConcessionaire', x: 70, y: 60, size: 18, color: '#5B7BD6' },
  { id: 'om',         label: 'PPP\nO&M',          x: 55, y: 42, size: 14, color: '#1A56DB' },
  { id: 'hybrid',     label: 'Hybrid',            x: 75, y: 22, size: 13, color: '#9D7FCB' },
  { id: 'coop',       label: 'Cooperative',       x: 32, y: 22, size: 14, color: 'var(--success)' },
  { id: 'ulb',        label: 'ULB',               x: 12, y: 14, size: 11, color: '#1F2A6B' },
]