// src/data/risks.js

export const riskIntro = 'This section is intended as a diagnostic lens. Operators can use it to periodically assess exposure to high-impact, often under-managed risks and identify areas requiring preventive action — even if current operations appear stable. These risks can affect long-term viability if not proactively addressed.'

export const riskLegend = [
  { id: 'low',      label: 'Low risk',      tone: 'low' },
  { id: 'mod',      label: 'Moderate risk', tone: 'mod' },
  { id: 'high',     label: 'High risk',     tone: 'high' },
  { id: 'critical', label: 'Critical — act now', tone: 'critical' },
]

/**
 * 3x3 matrix laid out in a flat array, row-major from top-left.
 * Rows: high impact (top) → low impact (bottom)
 * Cols: low likelihood (left) → high likelihood (right)
 *
 * Each cell has a `tone` (visual exposure level) and `bubbles` —
 * the risk codes positioned within that cell.
 */
export const riskMatrix = [
  // Row 1: HIGH impact
  { tone: 'mod',      bubbles: [{ id: 'compliance', code: 'COMP', label: 'Compliance risk' }] },
  { tone: 'high',     bubbles: [{ id: 'integrity', code: 'INT', label: 'Data / Integrity' }] },
  { tone: 'critical', bubbles: [
    { id: 'safety', code: 'SAF', label: 'Safety risk' },
    { id: 'social', code: 'SOC', label: 'Social / Labour' },
  ]},
  // Row 2: MEDIUM impact
  { tone: 'low',      bubbles: [] },
  { tone: 'mod',      bubbles: [{ id: 'financial', code: 'FIN', label: 'Financial risk' }] },
  { tone: 'high',     bubbles: [{ id: 'operational', code: 'OP', label: 'Operational risk' }] },
  // Row 3: LOW impact
  { tone: 'low',      bubbles: [] },
  { tone: 'low',      bubbles: [] },
  { tone: 'mod',      bubbles: [] },
]

export const matrixAxes = {
  impact: ['High', 'Medium', 'Low'],
  likelihood: ['Low likelihood', 'Medium likelihood', 'High likelihood'],
}

export const riskCards = [
  {
    id: 'operational', code: 'OP', title: 'Operational Risk', tone: 'op',
    cueNote: 'Processing disruption, workflow congestion, and equipment dependency.',
    body: 'Processing disruption, workflow congestion, equipment downtime, or intake-output imbalance can reduce throughput and create storage pressure.',
    signals: [
      'Repeated bottlenecks at intake, sorting, baling, or dispatch points',
      'Unprocessed waste accumulating beyond normal holding time',
      'High dependency on one machine, operator, or shift team',
    ],
    mitigations: [
      'Map workflow constraints and rebalance labour across peak points',
      'Track machine downtime and preventive maintenance adherence',
      'Maintain backup dispatch, storage, and manual sorting protocols',
    ],
  },
  {
    id: 'integrity', code: 'INT', title: 'Integrity and Data Risk', tone: 'int',
    cueNote: 'Weak records, unverifiable flows, and reporting gaps.',
    body: 'Weak records, inconsistent weighment, or unverifiable material movement can undermine trust with buyers, ULBs, EPR partners, and auditors.',
    signals: [
      'Manual records do not match weighbridge or dispatch data',
      'Material recovery, residue, and sales records are not traceable',
      'Bale tags, invoices, or buyer acknowledgements are missing',
    ],
    mitigations: [
      'Use daily reconciliation for intake, processing, storage, and dispatch',
      'Maintain bale-level or batch-level identifiers where feasible',
      'Assign clear ownership for records, review, and correction logs',
    ],
  },
  {
    id: 'safety', code: 'SAF', title: 'Safety Risk', tone: 'saf',
    cueNote: 'Injury, fire, unsafe handling, and exposure events.',
    body: 'Unsafe handling, poor housekeeping, fire hazards, or weak PPE discipline can create severe incidents and disrupt facility continuity.',
    signals: [
      'Workers handle sharp, biomedical, electrical, or hazardous items without protocol',
      'Fire extinguishers, exits, and walkways are blocked or unchecked',
      'Near-misses are discussed informally but not recorded',
    ],
    mitigations: [
      'Run daily housekeeping and PPE checks with supervisor sign-off',
      'Create isolation protocols for special and hazardous materials',
      'Record near-misses and close corrective actions within defined timelines',
    ],
  },
  {
    id: 'financial', code: 'FIN', title: 'Financial Risk', tone: 'fin',
    cueNote: 'Cash-flow pressure, price volatility, and buyer concentration.',
    body: 'Revenue volatility, delayed payments, buyer concentration, and rising operating costs can weaken cash flow even when operations appear stable.',
    signals: [
      'High dependency on one buyer or one material stream',
      'Receivables stretch beyond agreed payment terms',
      'Inventory builds up while market prices fluctuate',
    ],
    mitigations: [
      'Maintain multiple active buyers for priority material streams',
      'Track receivables, inventory age, and price realisation monthly',
      'Use clear payment terms and dispatch documentation before release',
    ],
  },
  {
    id: 'compliance', code: 'COMP', title: 'Compliance Risk', tone: 'comp',
    cueNote: 'Licensing, documentation, EPR, and statutory obligations.',
    body: 'Missing permits, weak documentation, or gaps in statutory and EPR reporting can expose the facility to penalties, contract risk, and buyer rejection.',
    signals: [
      'Licences, authorisations, or consent documents are not current',
      'ULB, EPR, GST, or labour records are incomplete',
      'Waste movement and disposal records cannot be produced quickly',
    ],
    mitigations: [
      'Maintain a compliance calendar with owner and renewal dates',
      'Store permits, invoices, manifests, and reports in a standard folder structure',
      'Conduct periodic internal documentation checks before audits',
    ],
  },
  {
    id: 'social', code: 'SOC', title: 'Social and Labour Risk', tone: 'soc',
    cueNote: 'Workforce instability, exclusion, and grievance escalation.',
    body: 'Worker exclusion, wage disputes, absenteeism, or unresolved grievances can affect productivity, trust, and continuity of MRF operations.',
    signals: [
      'High absenteeism or turnover among sorters and helpers',
      'Informal workers are present but not integrated into operating protocols',
      'Grievances, wage delays, or welfare gaps remain unresolved',
    ],
    mitigations: [
      'Maintain worker records, role clarity, and attendance review routines',
      'Create simple grievance escalation and resolution channels',
      'Support training, PPE access, welfare facilities, and informal sector integration',
    ],
  },
]