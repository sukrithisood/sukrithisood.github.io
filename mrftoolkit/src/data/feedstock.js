// src/data/feedstock.js

export const feedstockIntro = 'Feedstock received at MRFs can range from fully source-segregated to partially segregated or completely mixed waste. Facilities should prioritise improving the share of dry, segregated waste — higher proportions of wet or mixed waste significantly increase sorting effort, contamination, and operational costs.'

export const feedstockTabs = [
  { id: 'a', code: 'A', label: 'Source-wise Feedstock Profile' },
  { id: 'b', code: 'B', label: 'Upstream Segregation and Engagement' },
  { id: 'c', code: 'C', label: 'Variability and cyclicity' },
  { id: 'd', code: 'D', label: 'Intake and GRN' },
]

// ── Part A: Sources ──
export const feedstockSources = [
  {
    id: 'household',
    icon: 'Home',
    tone: 'primary',
    name: 'Household waste',
    tag: 'Door-to-door collection',
    profile: 'Mixed dry waste with variable segregation quality. Includes packaging, paper, plastic, glass, and small e-waste. Volume scales with population density and collection coverage.',
    challenges: 'Inconsistent segregation; seasonal volume swings; contamination from food residue; collection vehicle reliability issues.',
    fieldTip: 'Train collectors to make a 30-second visual assessment at each pickup and respond verbally — never silently accept contaminated waste. Recurring contamination from the same household needs supervisor follow-up.',
  },
  {
    id: 'bwg',
    icon: 'Building2',
    tone: 'info',
    name: 'Bulk Waste Generators (BWG)',
    tag: 'Hotels · malls · gated colonies',
    profile: 'Higher and more predictable volumes. Generally cleaner segregation than household streams when contracts are well-defined. Cardboard, PET, food packaging dominate.',
    challenges: 'Contract negotiation cycles; on-site storage standards vary; potential gatekeeping by housekeeping staff; tipping fee disputes.',
    fieldTip: 'BWGs respond to data, not pleas. Show them their monthly tonnage and recovery rate. Frame poor segregation as a cost they bear via tipping fees, not a moral failing.',
  },
  {
    id: 'commercial',
    icon: 'Store',
    tone: 'accent',
    name: 'Commercial establishments',
    tag: 'Markets · shops · offices',
    profile: 'Concentrated cardboard, paper, and plastic packaging. Generally cleaner since handled by trained staff. Volumes vary by sector and day of week.',
    challenges: 'Pickup time alignment with business hours; informal sector overlap and competition for clean cardboard; weekend and holiday variability.',
    fieldTip: 'Time pickups to coincide with shop close — most owners prefer end-of-day clearance over morning interruption. Build relationships with shop associations, not individual shops.',
  },
  {
    id: 'rural',
    icon: 'Wheat',
    tone: 'success',
    name: 'Rural feeder routes',
    tag: 'Peri-urban / village clusters',
    profile: 'Lower volumes per pickup but cleaner streams typically. Agricultural packaging dominant in harvest months. Distance and route economics are the key variable.',
    challenges: 'Transportation cost per ton; route consolidation; chemical residue on agricultural packaging; community fee collection mechanisms.',
    fieldTip: 'Aggregate small rural sources via a relay model — local collection points feeding a once-weekly trunk vehicle to the MRF. Door-to-door at rural scale rarely pays.',
  }
]

// ── Part B: Upstream engagement ──
export const rwaStructure = [
  { period: 'Monthly meetings',  body: 'Address citizen queries, provide end traceability information, share recycling outcomes. Dedicated community mobilisers from the MRF act as on-ground support for day-to-day issues.' },
  { period: 'Annual meetings',   body: "Budget-setting and agenda-driving. Periodic reports on waste traceability and recycling outcomes reinforce the community's role and build continued buy-in." },
]

export const tactics = [
  { icon: 'MessageSquare', tone: 'info',     title: 'Active communication channels',       body: 'Maintain WhatsApp groups to resolve day-to-day queries, share collection updates, and address non-compliance quickly. Share visual evidence of how segregated waste is handled.' },
  { icon: 'Home',          tone: 'success',  title: 'Enabling infrastructure',              body: 'Support communities with composting bin setups in high-footfall spaces, appropriate bin placement, and service reliability. Awareness without infrastructure leads to behaviour reversion.' },
  { icon: 'Info',          tone: 'accent',   title: 'On-the-spot collector education',      body: "Train collectors to evaluate a household's output in 30 seconds and respond to contamination with a verbal script — not a rejection. Collectors are the primary human interface." },
  { icon: 'Heart',         tone: 'primary',  title: 'Household recognition',                body: 'Acknowledge households maintaining good segregation — a sticker, community mention, or small benefit. Social recognition consistently outperforms financial incentives.' },
  { icon: 'Camera',        tone: 'primary',  title: 'Visual evidence and traceability',     body: 'Share photos and data showing how segregated waste is handled and what recycling outcomes it generates. Demonstrating real outcomes builds durable trust and continued compliance.' },
  { icon: 'Network',       tone: 'accent',   title: 'Service reliability as a trust signal',body: 'Ensure consistent service delivery before running awareness campaigns. Missed collections are the single biggest driver of behaviour reversion.' },
]

export const eyesOnGround = [
  { label: 'Who',          body: 'Local shopkeepers, tea stall owners, watchmen, and daily commuters who observe collection vehicles on their routes.' },
  { label: 'What they do', body: 'Confirm whether the collection vehicle crossed their area. Flag late, skipped, or overloaded vehicles through a shared WhatsApp group.' },
  { label: 'Why it works', body: 'They are on-ground when supervisors are not — informal monitoring closes the gap between dispatch records and street reality.' },
]

// ── Part C: Variability ──
export const seasonCards = [
  { season: 'Monsoon', period: 'June – September', icon: 'CloudRain',
    body: 'Dry waste absorbs humidity during transport, especially in uncovered vehicles. Paper and cardboard lose structural integrity. Sorting speed drops as wet material clumps and sticks to conveyor surfaces.',
    bestPractices: 'Enforce covered transportation as a non-negotiable gate condition. Create a pre-sorting sun-drying zone — a covered shed where material air-dries for an hour before sorting. Service conveyor belts before monsoon.' },
  { season: 'Summer', period: 'March – May', icon: 'Sun',
    body: 'Peak waste generation from festivals, weddings, and market activity coincides with peak labour attrition — workers returning to villages. Fire risk rises with dusty, dry material accumulation.',
    bestPractices: 'Pre-season workforce planning and cross-training. Build a buffer workforce pool. Full machine servicing and spare parts stocking before peak load. Verify fire extinguisher validity.' },
  { season: 'Winter', period: 'October – February', icon: 'Snowflake',
    body: 'Most stable operating period — dry conditions, reliable labour, typically stronger market prices. This is when capacity utilisation optimisation should be the primary focus.',
    bestPractices: 'Drive collection coverage and community engagement. Deepen CBWG relationships. Run worker training and SOP documentation. Optimise dispatch cycles and buyer relationships.' },
]

export const eventCards = [
  { id: 'fest',   icon: 'PartyPopper', title: 'Major festivals',   period: 'Diwali, Eid, Holi, Pongal, Onam — Sudden volume spike',
    body: 'Packaging dominates — cardboard boxes, bubble wrap, plastic clamshells, foil, gift wrapping. This is a revenue opportunity. Pre-arrange temporary storage, brief collection staff, extend routes, schedule extra baling time in the two weeks following.',
    streams: 'Cardboard ↑↑ · PET ↑ · MLP ↑' },
  { id: 'wed',    icon: 'Heart',       title: 'Wedding season',    period: 'Nov–Feb and May–Jun in most states',
    body: 'Single-use plastic, fabric, and food packaging in concentrated volumes from venues. Geographic concentration means spikes appear at venues, not uniformly. Identify major venues and establish post-event collection arrangements within 24 hours.',
    streams: 'Single-use plastic ↑↑ · Fabric ↑' },
  { id: 'tour',   icon: 'Globe',       title: 'Tourist season',    period: 'Hill stations · Coastal towns · Pilgrimage sites',
    body: 'Higher proportion of packaged food and beverage waste — PET, tetra packs, single-use bags — with worse spatial distribution across tourist trails. Establish hotel and resort arrangements before season; budget for additional temporary labour.',
    streams: 'PET ↑↑ · Tetra pack ↑ · Single-use ↑' },
  { id: 'harv',   icon: 'Wheat',       title: 'Post-harvest season', period: 'Rural and peri-urban MRFs',
    body: 'Agricultural packaging — pesticide containers, fertiliser bags, seed packets, HDPE sacks — appears in volume. Some has recycling value; some carries chemical residue. Train gate staff to distinguish clean from contaminated before harvest season.',
    streams: 'HDPE sacks ↑ · Contaminated: reject' },
]

export const eventTips = [
  { num: 1, body: 'Build a feedstock calendar as a planning system. A simple monthly table noting expected volume direction, quality direction, dominant material shifts, labour pressure, and planned community activities. Display at the facility — enables proactive operations rather than reactive response.' },
  { num: 2, body: 'Pre-season infrastructure and equipment preparation. Formal checklist, not ad hoc. Before monsoon: drain holes, roof leaks, belt servicing. Before summer: full machine servicing, spare blades, fire extinguisher validity — fire risk rises with dusty light material.' },
]

// ── Part D: Intake ──
export const gateSignals = [
  { id: 'dry',    icon: 'Sun',           label: 'Load is dry',                      neg: false },
  { id: 'seg',    icon: 'Check',         label: 'Visibly segregated',                neg: false },
  { id: 'cov',    icon: 'Truck',         label: 'Vehicle was covered',               neg: false },
  { id: 'known',  icon: 'ClipboardList', label: 'Known regular source',              neg: false },
  { id: 'wet',    icon: 'Droplets',      label: 'Wet or damp material',              neg: true },
  { id: 'mixed',  icon: 'AlertTriangle', label: 'Organic contamination visible',     neg: true },
  { id: 'haz',    icon: 'Biohazard',     label: 'Hazardous item visible',            neg: true },
  { id: 'uncov',  icon: 'CloudRain',     label: 'Uncovered during transport',        neg: true },
]

export const abcStandard = [
  { grade: 'A', tone: 'success', title: 'Well-segregated, dry',                body: 'Visually clean dry waste, minimal contamination, from a known and consistent source. Route directly to sorting line.' },
  { grade: 'B', tone: 'warning', title: 'Mixed dry, moderate contamination',   body: 'Dry waste with some mixing or partial contamination. Manageable with extra handling. Route to pre-sort check zone before main line.' },
  { grade: 'C', tone: 'danger',  title: 'Wet or heavily contaminated',         body: 'Significant wet content, heavy contamination, or hazardous material present. Supervisor decision required before any routing.' },
]

export const wrnFields = [
  { label: 'Source identity',       body: 'Name, type (household / BWG / commercial / rural feeder), driver name, vehicle number.' },
  { label: 'Visual quality grade',  body: 'A / B / C as assessed by gate supervisor. Photo of load before unloading — geo-tagged and timestamped.' },
  { label: 'Weight and time',       body: 'Weighbridge slip, date and time of arrival. Estimated weight if no in-house weighbridge available.' },
  { label: 'Routing decision',      body: 'Assigned intake zone and any special handling instructions — pre-sort, hold, or supervisor approval required.' },
  { label: 'Driver sign-off',       body: 'Driver signature on WRN. Copy retained by facility; copy given to driver as out-pass receipt.' },
  { label: 'Rejection record',      body: 'If load is rejected: reason, source, date, and supervisor sign-off. Filed separately for trend analysis.' },
]

export const rejectProtocols = [
  { name: 'Biomedical and sanitary waste',    action: 'Return to source with a written rejection note. Log and escalate to ULB if the same source sends repeatedly.' },
  { name: 'Hazardous and chemical containers', action: 'Do not handle without full PPE. Document with photo. Redirect to authorised hazardous waste channel only.' },
  { name: 'Textiles and synthetic fabric',     action: 'Define in SOP which items trigger rejection. Separate collection protocol or authorised textile recycler required.' },
]