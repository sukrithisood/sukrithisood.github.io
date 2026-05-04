// src/data/workforce.js

export const workforceIntro = 'A 10 TPD facility typically operates with 16–18 workers across 7 roles. Workforce resilience depends on cross-training, not headcount alone. The most common single point of failure in Indian MRFs is one trained baler operator — training a backup costs one week and prevents weeks of downtime.'

export const workforceTabs = [
  { id: 'scaler',      label: 'TPD workforce scaler' },
  { id: 'training',    label: 'Training by role' },
  { id: 'payment',     label: 'Payment models' },
  { id: 'recognition', label: 'Recognition programs' },
]

/**
 * Reference role counts for a 10 TPD baseline (manual-to-semi-mechanised MRF).
 * `per10` is headcount at 10 TPD. We linearly scale from that baseline.
 * `min` is the floor — even a 2 TPD facility needs at least 1 supervisor.
 */
export const baseRoles = [
  { id: 'sorter',     icon: 'Users',         label: 'Sorters',           per10: 9, min: 2, scale: true },
  { id: 'loader',     icon: 'PackageOpen',   label: 'Loaders/unloaders', per10: 2, min: 1, scale: true },
  { id: 'machine',    icon: 'Settings',      label: 'Machine operator(s)', per10: 1, min: 1, scale: true },
  { id: 'forklift',   icon: 'Forklift',      label: 'Forklift operator', per10: 1, min: 1, scale: true },
  { id: 'collector',  icon: 'Truck',         label: 'Collectors',        per10: 2, min: 1, scale: true },
  { id: 'supervisor', icon: 'ClipboardCheck',label: 'Plant supervisor',  per10: 1, min: 1, scale: false },
  { id: 'records',    icon: 'FileText',      label: 'Record-keeping officer', per10: 1, min: 1, scale: false },
]

export const scalerCaveat = 'These estimates are for a manual-to-semi-mechanised MRF processing mixed dry waste. Mechanised facilities can achieve the same throughput with 30–40% fewer sorters. Use these as planning anchors — your actual numbers depend on feedstock mix, shift length, and worker productivity.'

// ── Training by role (from uploaded doc) ──
export const trainingByRole = [
  {
    role: 'Collector',
    icon: 'Truck',
    skills: [
      { topic: 'Route management',         body: 'Route map, collection schedule, missed-collection reporting protocol.' },
      { topic: 'Community engagement',     body: 'Talking points for common household queries or objections, updates on community complaints.' },
      { topic: 'Segregation assessment',   body: "On-the-spot evaluation of household output in 30 seconds, standardised verbal response script for contaminated loads." },
    ],
  },
  {
    role: 'Sorter',
    icon: 'Users',
    skills: [
      { topic: 'Material identification',  body: 'Physical sample handling of all major categories with feel, weight, flexibility tests, and common misidentifications.' },
      { topic: 'Material handling',        body: 'Hazardous material recognition (what not to touch), stop-and-flag protocol, alerting supervisor without handling the item.' },
      { topic: 'Occupational health',      body: 'Correct posture while working at the sorting station, PPE and protective gear usage.' },
      { topic: 'Event-triggered briefings', body: 'After any buyer rejection: what was rejected, why, which source batch was implicated, re-training on the specific misclassification.' },
    ],
  },
  {
    role: 'Machine operator',
    icon: 'Settings',
    skills: [
      { topic: 'Machine operation',        body: 'Step-by-step operational training (demonstration and supervised practice), fault recognition, emergency stop procedures.' },
      { topic: 'Pre-operations safety checks', body: 'Daily safety and readiness checklist before starting equipment.' },
      { topic: 'Output quality control',   body: 'Ensuring bale density, consistency, and correct tagging or labelling.' },
      { topic: 'Preventative maintenance', body: 'Routine checks and basic servicing to reduce breakdowns.' },
      { topic: 'Breakdown response',       body: 'Clear escalation paths and safe shutdown protocols.' },
    ],
  },
  {
    role: 'Forklift operator',
    icon: 'Forklift',
    skills: [
      { topic: 'Machine operation',        body: 'Certified handling and manoeuvring within confined MRF environments.' },
      { topic: 'Load management',          body: 'Safe lifting, stacking, and transport of material.' },
      { topic: 'Pre-operations safety checks', body: 'Daily inspection of brakes, hydraulics, and controls.' },
      { topic: 'Movement discipline',      body: 'Adherence to designated pathways and coordination with floor staff.' },
    ],
  },
  {
    role: 'Loader / unloader',
    icon: 'PackageOpen',
    skills: [
      { topic: 'Material handling',        body: 'Efficient unloading and movement of material to designated zones.' },
      { topic: 'Occupational safety',      body: 'Vehicle proximity, lifting techniques, hazard awareness.' },
      { topic: 'Dispatch procedures',      body: 'Correct loading sequence on dispatch vehicle, stacking stability, and securing loads — sheeting, tying, tensioning.' },
    ],
  },
  {
    role: 'Supervisor',
    icon: 'ClipboardCheck',
    skills: [
      { topic: 'Operations management',    body: 'Maintaining daily logs of throughput, workforce, and key issues.' },
      { topic: 'Quality control',          body: 'Spot and on-sight checks on sorting accuracy, contamination levels, and output consistency.' },
      { topic: 'Workforce planning',       body: 'Scheduling, absenteeism management, and performance monitoring.' },
      { topic: 'Buyer interface',          body: 'Managing communication and addressing grievances.' },
    ],
  },
]

// ── Payment models ──
export const paymentIntro = 'Payment structures significantly influence workforce productivity, retention, and ease of formalisation. Different models work for different roles — the right structure balances worker stability with operational performance incentives.'

export const paymentModels = [
  { id: 'val', tone: 'primary',
    badge: 'Value-based', title: 'Pay by material value',
    desc: 'Worker earnings factor in both the type of waste segregated and the volume per day. High-value materials earn more per kg.',
    pros: ['Strong incentive for quality sorting', 'Aligns worker and facility revenue interests'],
    cons: ['Workers may neglect low-value streams', 'Complex to calculate and explain', 'Price fluctuations affect take-home'],
  },
  { id: 'qty', tone: 'info',
    badge: 'Quantity-based', title: 'Pay by kg sorted',
    desc: 'Workers paid based on total kilograms sorted per day, regardless of material type or value.',
    pros: ['Simple to calculate and communicate', 'Incentivises throughput and speed'],
    cons: ['Can cause inter-worker conflicts', 'May incentivise speed over quality'],
  },
  { id: 'fix', tone: 'accent',
    badge: 'Fixed salary', title: 'Fixed monthly pay',
    desc: 'Workers receive a fixed monthly amount independent of daily sorting volume or material value.',
    pros: ['Predictable for worker and facility', 'Simplifies PF/ESI and benefit provision'],
    cons: ['No direct performance incentive', 'Productivity may plateau without monitoring'],
  },
]

export const paymentBestPractice = 'Use a hybrid model — base salary + performance incentive. Workers get income stability and the facility retains a throughput incentive. This balances stability with efficiency and makes PF/ESI provision straightforward.'

export const formalisationFriction = {
  title: 'Key challenge: formalisation friction',
  body: 'Moving workers from informal cash-in-hand arrangements to formal payroll — with PF and ESI deductions — can reduce immediate take-home even when total compensation is higher. This is one of the most common triggers for early resignation.',
  tips: [
    'Financial literacy workshops — explain deductions and long-term benefits (PF savings, ESI hospitalisation) in accessible language, one-on-one not group sessions.',
    'Transparent payslips that clearly break down each component — workers should understand exactly what they earned and where each deduction went.',
    'Incentive top-ups (even ₹200–300/month "tea allowance") that partially offset the perceived deduction loss without compromising compliance.',
    'Non-monetary benefits: transport support, meal allowances, health camps — high perceived value, low cost per person.',
    'Paid leave policy — workers in informal arrangements rarely had leave entitlement; formalising this is a tangible and valued benefit.',
  ],
  collectorNote: 'For collectors: payment is typically tied to collection coverage and fees collected from households. Key issues — low household fee payment rates and inconsistent coverage. Consider route-based fixed pay supplemented by a collection fee bonus.',
}

// ── Recognition ──
export const recognitionIntro = 'Workforce retention is a key challenge in MRF operations, especially for manual roles. There is social stigma associated with waste work, causing challenges in both hiring and retention. Recognition programs that build pride, peer solidarity, and a sense of career progression are among the highest-leverage low-cost interventions available.'

export const recognitionCards = [
  {
    icon: 'Image',
    tone: 'primary',
    tag: 'Public recognition',
    title: 'Worker of the Week board',
    body: 'A photo board at the facility entrance showing the Worker of the Week — name, photo, and what they achieved. Workers share on family WhatsApp groups, extending recognition beyond the facility. Display and update weekly.',
  },
  {
    icon: 'Users',
    tone: 'info',
    tag: 'Peer recognition',
    title: 'Peer nomination chits',
    body: 'Each worker gets one "recognition chit" per week to give any colleague who helped them or went above and beyond. Chits are tallied monthly. This surfaces quieter workers invisible to supervisors and builds horizontal solidarity.',
  },
]

export const careerLadder = [
  { level: 'L1', title: 'Sorter — Level 1', sub: 'Entry level',          desc: 'Basic sorting, material ID' },
  { level: 'L2', title: 'Sorter — Level 2', sub: 'Skilled sorter',        desc: 'Handles machinery, trains new joiners' },
  { level: 'L3', title: 'Senior / Team Lead', sub: 'Team leader',         desc: 'Line supervision, quality checks' },
]

export const tenureMilestones = [
  { num: '6 mo',  label: 'First milestone — certificate and public acknowledgment' },
  { num: '1 yr',  label: 'Annual milestone — meaningful gift, photo on facility wall' },
  { num: '~1000', label: 'Working days (~3 years) — formal ceremony, permanent display, mentor status', special: true },
]

export const ambassadorBox = {
  title: 'Ambassadors of waste management',
  body: 'Connect recognition to environmental impact storytelling. Translate workers\' daily output into impact language — "Your team diverted X tonnes from landfill this month." When workers begin describing themselves as environment workers rather than waste workers, self-image shifts — and so does retention.',
}