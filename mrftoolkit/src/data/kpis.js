// src/data/kpis.js
export const kpiCategories = [
  { id: 'all',  label: 'All',                count: 15 },
  { id: 'ops',  label: 'Operations',         count: 3 },
  { id: 'qual', label: 'Quality & Recovery', count: 2 },
  { id: 'work', label: 'Workforce',          count: 3 },
  { id: 'fin',  label: 'Financial Health',   count: 2 },
  { id: 'comp', label: 'Compliance',         count: 1 },
  { id: 'down', label: 'Downstream & Market', count: 4 },
]

export const kpis = [
  { cat: 'ops',  icon: 'Gauge',         title: 'Capacity Utilisation', formula: 'Actual input received (TPD) / Designed capacity (TPD) × 100', desc: 'Measures whether the facility is being used to its designed potential. Very low utilisation signals collection gaps.', bands: [['g','70–90%','Target'],['a','50–70%','Warning'],['r','< 50%','Low']] },
  { cat: 'ops',  icon: 'Clock',         title: 'Sorting Turnaround',   formula: 'Total time from job arrival to final baling per ton',         desc: 'Directly affects storage congestion and material quality degradation. Longer dwell times worsen material value.',          bands: [['g','< 60m','Peak'],['a','60–120m','Mod'],['r','> 120m','Lags']] },
  { cat: 'ops',  icon: 'Settings',      title: 'Machine Downtime',     formula: 'Unplanned maintenance / Operating hours × 100',               desc: 'Equipment breakdown is a major throughput disruptor. Preventive maintenance and protocols directly reduce this.',          bands: [['g','< 5%','Stable'],['a','5–10%','Sub'],['r','> 10%','Risk']] },
  { cat: 'qual', icon: 'Recycle',       title: 'Recovery Efficiency',  formula: '(Recyclables extracted / Recyclables in input) × 100',        desc: 'Core measure of how much value the facility extracts from its input. Affected by contamination.',                          bands: [['g','> 85%','High'],['a','70–85%','Avg'],['r','< 70%','Low']] },
  { cat: 'qual', icon: 'Trash2',        title: 'Residue Rate',         formula: '(Weight of residue / Total input weight) × 100',              desc: 'High rejection rates raise disposal costs and reduce revenue. Lower rejection signals stronger segregation.',               bands: [['g','< 15%','Superior'],['a','15–25%','Med'],['r','> 25%','Poor']] },
  { cat: 'work', icon: 'Users',         title: 'Labour Productivity',  formula: 'Tons processed / Total man-hours',                            desc: 'Measures output per worker per day. Varies by mechanisation. Manual facilities benchmark 150–300 kg/day.',                  bands: [['g','> 250','High'],['a','150–250','Std'],['r','< 150','Low']] },
  { cat: 'work', icon: 'UserMinus',     title: 'Workforce Turnover',   formula: 'Departures / Avg. headcount × 100 monthly',                   desc: 'High turnover increases training costs and signals dissatisfaction. Linked to working conditions.',                         bands: [['g','< 5%','Stable'],['a','5–10%','Mod'],['r','> 10%','Unstable']] },
  { cat: 'work', icon: 'GraduationCap', title: 'Training Coverage',    formula: 'Trained staff / Total staff × 100',                           desc: 'Untrained workers cause unsafe machine operation and higher injury risk. Critical for material ID accuracy.',               bands: [['g','> 95%','Excel'],['a','80–95%','Target'],['r','< 80%','Risk']] },
  { cat: 'fin',  icon: 'IndianRupee',   title: 'Cost per kg',          formula: 'Total OPEX / Weight of recovered material',                   desc: 'Fundamental unit economics metric. Includes labour, transport, energy, and maintenance costs.',                             bands: [['g','₹2–5','Eff'],['a','₹5–8','Avg'],['r','> ₹8','High']] },
  { cat: 'fin',  icon: 'Wallet',        title: 'Op. Sufficiency',      formula: 'Total Revenue / Total OPEX',                                  desc: 'Measures how much of operations are funded by own revenue vs grants. Self-sufficiency is aspirational.',                    bands: [['g','> 1x','Sustain'],['a','0.6–1x','Path'],['r','< 0.6x','Grant']] },
  { cat: 'comp', icon: 'FileCheck',     title: 'Doc Completeness',     formula: '(Verified / Required compliance records) × 100',              desc: 'Traceability for ULB reporting and EPR compliance. Gaps make it impossible to prove impact.',                               bands: [['g','100%','Audit'],['a','90–99%','Gaps'],['r','< 90%','Risk']] },
  { cat: 'down', icon: 'Network',       title: 'Buyer Diversity',      formula: 'Number of active buyers per material category',               desc: 'Dependence on single buyers creates risk. Diversification improves price discovery and stability.',                         bands: [['g','> 4','Low risk'],['a','2–4','Mod'],['r','< 2','High risk']] },
  { cat: 'down', icon: 'Boxes',         title: 'Inventory Turnover',   formula: 'COGS / Average Inventory on Hand',                            desc: 'Excess inventory locks up capital. High inventory signals weak buyer relationships or price standoffs.',                    bands: [['g','> 8x','Fast'],['a','4–8x','Mod'],['r','< 4x','Slow']] },
  { cat: 'down', icon: 'TrendingUp',    title: 'Price Realisation',    formula: '(Selling Price / Benchmark Market Rate) × 100',               desc: 'Measures whether the MRF is achieving fair prices relative to market benchmarks.',                                          bands: [['g','> 95%','Prem'],['a','85–95%','Avg'],['r','< 85%','Low']] },
  { cat: 'down', icon: 'Layers',        title: 'Revenue Streams',      formula: 'Count of distinct material categories sold monthly',          desc: 'Active material channels. More streams signal better sorting and higher facility value.',                                  bands: [['g','> 10','Opt'],['a','5–10','Std'],['r','< 5','Ltd']] },
]

// Configuration for the self-assessment calculator (matches kpis above by id)
export const assessConfig = [
  { id: 'a1', label: 'Capacity utilisation', unit: '%',      placeholder: 'e.g. 72',  green: [70, 90],   amber: [50, 70],  inverted: false, tip: 'Review collection coverage and CBWG pipeline' },
  { id: 'a2', label: 'Recovery efficiency',  unit: '%',      placeholder: 'e.g. 58',  green: [85, 100],  amber: [70, 85],  inverted: false, tip: 'Improve gate grading and sorting accuracy' },
  { id: 'a3', label: 'Distinct Revenue Streams',   unit: 'count',    placeholder: 'e.g. 4',  green: [4, 99999999],    amber: [2, 4], inverted: false,  tip: 'Manage diversification to mitigate risk exposure' },
  { id: 'a4', label: 'Labour productivity',  unit: 'kg/day', placeholder: 'e.g. 200', green: [250, 9999],amber: [150, 250],inverted: false, tip: 'Check absenteeism and cross-training coverage' },
  { id: 'a5', label: 'Inventory Turnover',   unit: 'days',      placeholder: 'e.g. 10',   green: [0, 15],     amber: [15, 30],   inverted: true,  tip: 'Investigate working capital or quality deterioration risk' },
  { id: 'a6', label: 'Cost per kg',          unit: '₹',      placeholder: 'e.g. 6',   green: [0, 5],     amber: [5, 8],    inverted: true,  tip: 'Track disposal costs and recovery rate separately' },
]