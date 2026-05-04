// src/data/processing1.js

export const proc1Intro = 'Efficient processing workflows and optimal machine utilisation are central to MRF performance. Well-designed systems ensure consistent throughput, higher recovery, and lower operational stress, while poorly structured workflows lead to congestion, delays, and value loss.'

export const proc1Principles = [
  { title: 'Maintain a sequential and linear workflow.', body: 'Avoid circular or backtracking flows — they cause congestion, worker confusion, and cross-contamination.' },
  { title: 'Process incoming waste within 24–48 hours.', body: 'Do not allow accumulation. Unsorted waste begins to generate odour, attract pests, and create storage congestion that cascades into throughput problems.' },
]

export const proc1Tabs = [
  { id: 'bottlenecks',   label: 'Common Bottlenecks and Mitigation' },
  { id: 'mechanisation', label: 'Segregation Mechanisation Strategy' },
  { id: 'maintenance',   label: 'Asset Handling' },
]

// ── Bottlenecks ──
export const bottlenecks = [
  {
    title: 'Wet waste contamination',
    icon: 'Droplets',
    impact: ['Slows sorting speed.', 'Reduces value of recoverable dry material.', 'Creates odour, pest issues, and worker discomfort.'],
    mitigation: ['Strengthen intake screening at the gate.', 'Reject or separately hold visibly wet loads.', 'Escalate repeated contamination to collection teams or ULB supervisors.'],
  },
  {
    title: 'Labour absenteeism',
    icon: 'UserMinus',
    impact: ['Creates gaps on critical sorting points.', 'Builds backlog during peak intake hours.', 'Forces supervisors to shift trained workers away from quality checks.'],
    mitigation: ['Maintain backup workers for key roles.', 'Use cross-training so sorters can rotate between stations.', 'Track absenteeism by day, role, and shift.'],
  },
  {
    title: 'Equipment breakdowns',
    icon: 'Wrench',
    impact: ['Stops baling, conveyor movement, or weighing.', 'Creates storage congestion and dispatch delays.', 'Raises manual handling and safety risks.'],
    mitigation: ['Use preventive maintenance logs for each machine.', 'Keep critical spares available on site.', 'Assign machine ownership to named operators.'],
  },
  {
    title: 'Workflow imbalance',
    icon: 'GitBranch',
    impact: ['One station becomes overloaded while others wait.', 'Material starts moving backwards or sideways.', 'Cross-contamination increases between categories.'],
    mitigation: ['Place workers according to actual volume at each stage.', 'Keep material flow linear from intake to dispatch.', 'Review bottlenecks during daily supervisor rounds.'],
  },
]

// ── Mechanisation comparison ──
export const mechModels = [
  {
    name: 'Manual Sorting',
    capex: 'Low',
    labour: 'High',
    throughput: 'Low to moderate',
    flexibility: 'High',
    info: {
      what: 'Workers manually identify, separate, and move materials across sorting tables or floor-based stations.',
      when: 'Suitable where volumes are lower, feedstock is highly variable, or capital availability is limited.',
      pros: 'Low capex, high flexibility, and easier adaptation to changing material streams.',
      cons: 'High labour dependency, variable productivity, and greater exposure to fatigue and absenteeism.',
      insight: 'Manual systems perform best when station roles are clear and material movement remains linear.',
    },
  },
  {
    name: 'Semi-mechanised (Conveyor)',
    capex: 'Moderate',
    labour: 'Moderate',
    throughput: 'Moderate to high',
    flexibility: 'Moderate',
    info: {
      what: 'A conveyor supports steady material movement while workers sort from fixed positions along the line.',
      when: 'Useful where daily volumes are consistent and the facility needs higher throughput without full automation.',
      pros: 'Improves flow discipline, reduces floor congestion, and makes supervisor monitoring easier.',
      cons: 'Requires power reliability, maintenance discipline, and balanced worker placement along the line.',
      insight: 'A conveyor only improves performance when feeding speed matches actual sorting capacity.',
    },
  },
  {
    name: 'Mechanised (Optical)',
    capex: 'High',
    labour: 'Low to moderate',
    throughput: 'High',
    flexibility: 'Lower for variable feedstock',
    info: {
      what: 'Optical sorting equipment identifies and separates selected material categories using sensors and automated ejection.',
      when: 'Best suited to larger facilities with predictable feedstock, reliable utilities, and maintenance capability.',
      pros: 'High throughput, lower manual sorting dependency, and stronger consistency for targeted material streams.',
      cons: 'High capex, specialist maintenance needs, and lower tolerance for dirty or highly mixed input.',
      insight: 'Optical systems need clean upstream screening; technology cannot compensate for poor intake quality.',
    },
  },
]

export const compareHeaders = ['Model', 'Capex', 'Labour dependency', 'Throughput', 'Flexibility']

// ── Maintenance ──
export const maintenanceCards = [
  { title: 'Asset Register',          icon: 'BookOpen',    items: ['Record machine name, model, serial number, location, and commissioning date.', 'Track ownership, operator assigned, warranty, and service provider details.', 'Update status after repairs, relocation, or replacement.'] },
  { title: 'Maintenance Checklist',   icon: 'ListChecks',  items: ['Separate daily, weekly, and monthly checks.', 'Log cleaning, lubrication, belt checks, blade checks, and electrical inspection.', 'Supervisor signs off completed checks.'] },
  { title: 'Spare Parts Inventory',   icon: 'Boxes',       items: ['Maintain minimum stock levels for critical spares.', 'Track issue date, quantity used, and reorder trigger.', 'Prioritise spares that can stop the full processing line.'] },
  { title: 'Machine Ownership',       icon: 'UserCheck',   items: ['Assign each machine to a named operator and backup.', 'Make reporting of unusual noise, vibration, or heat routine.', 'Review machine logs during supervisor rounds.'] },
]

export const maintenanceKpis = [
  { name: 'Machine uptime (%)',                          def: 'Percentage of total available time that equipment is operational.' },
  { name: 'Downtime hours (per day / week)',             def: 'Total hours machines are non-functional, tracked by cause.' },
  { name: 'Breakdown frequency',                         def: 'Number of unplanned breakdowns per machine per month.' },
  { name: 'Mean Time to Repair (MTTR)',                  def: 'Average time taken to restore equipment after a breakdown.' },
  { name: 'Preventive maintenance adherence (%)',         def: 'Share of scheduled maintenance activities completed on time.' },
  { name: 'Throughput loss due to downtime (TPD impact)', def: 'Estimated processing capacity lost due to equipment issues.' },
]