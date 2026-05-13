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
  { cat: 'ops',  icon: 'Clock',         title: 'Sorting Turnaround',   formula: 'Time between waste receipt and completion of sorting (hours)',         desc: 'Directly affects storage congestion and material quality degradation. Longer dwell times worsen material value.',          bands: [['g','< 24hr','Peak'],['a','24–48hr','Mod'],['r','> 48hr','Lags']] },
  { cat: 'ops',  icon: 'Settings',      title: 'Machine Downtime',     formula: 'Hours of unplanned machine downtime ÷ Total scheduled machine hours',               desc: 'Equipment breakdown is a major throughput disruptor. Preventive maintenance and protocols directly reduce this.',          bands: [['g','< 5%','Stable'],['a','5–15%','Sub'],['r','> 15%','Risk']] },
  { cat: 'qual', icon: 'Recycle',       title: 'Recovery Efficiency',  formula: 'Weight of recyclable material dispatched ÷ Total input waste received',        desc: 'Core measure of how much value the facility extracts from its input. Affected by contamination.',                          bands: [['g','> 60%','High'],['a','40–60%','Avg'],['r','< 40%','Low']] },
  { cat: 'fin', icon: 'IndianRupee',        title: 'Revenue Yield per KG',  formula: 'Total revenue generated from operations / Total recyclable material recovered',              desc: 'Lower-quality outputs, weak buyer linkages, or sale of unprocessed material typically reduce revenue yield.',               bands: [['g','> 90%','Superior'],['a','80–90%','Med'],['r','< 80%','Poor']] },
  { cat: 'work', icon: 'Users',         title: 'Labour Productivity',  formula: 'Total kg of recyclable material recovered ÷ Number of sorting workers × working days',                            desc: 'Measures output per worker per day. Varies by mechanisation. Manual facilities benchmark 150–300 kg/day.',                  bands: [['g','> 250','High'],['a','150–250','Std'],['r','< 150','Low']] },
  { cat: 'work', icon: 'UserMinus',     title: 'Workforce Turnover',   formula: 'Workers who left ÷ Average total workforce  (annually)',                   desc: 'High turnover increases training costs and signals dissatisfaction. Linked to working conditions.',                         bands: [['g','< 20%','Stable'],['a','20–40%','Mod'],['r','> 40%','Unstable']] },
  { cat: 'work', icon: 'GraduationCap', title: 'Training Coverage',    formula: 'Workers trained on role-specific skills ÷ Total workers',                           desc: 'Untrained workers cause unsafe machine operation and higher injury risk. Critical for material ID accuracy.',               bands: [['g','100%','Excel'],['a','60–99%','Target'],['r','< 60%','Risk']] },
  { cat: 'fin',  icon: 'IndianRupee',   title: 'Cost per KG',          formula: 'Total OPEX / Weight of recovered material',                   desc: 'Fundamental unit economics metric. Includes labour, transport, energy, and maintenance costs.',                             bands: [['g','90-100%','Eff'],['a','100-120%','Avg'],['r','> 120%','High']] },
  { cat: 'fin',  icon: 'Wallet',        title: 'Op. Sufficiency',      formula: 'Revenue from material sales ÷ Total OPEX',                                  desc: 'Measures how much of operations are funded by own revenue vs grants. Self-sufficiency is aspirational.',                    bands: [['g','> 70%','Sustain'],['a','40–70%','Path'],['r','< 40%','Grant']] },
  { cat: 'comp', icon: 'FileCheck',     title: 'Doc Completeness',     formula: 'Degree of records updated, including presence and severity of audit findings',              desc: 'Traceability for ULB reporting and EPR compliance. Gaps make it impossible to prove impact.',                               bands: [['g','Updated; no findings','Audit'],['a','Minor delays; some findings','Gaps'],['r','Major gaps and findings','Risk']] },
  { cat: 'down', icon: 'Network',       title: 'Buyer Diversity',      formula: 'Number of active buyers per material category',               desc: 'Dependence on single buyers creates risk. Diversification improves price discovery and stability.',                         bands: [['g','> 2','Low risk'],['a','1–2','Mod'],['r','< 2','High risk']] },
  { cat: 'down', icon: 'Boxes',         title: 'Inventory Turnover',   formula: 'Average inventory value ÷ Daily material sales value',                            desc: 'Excess inventory locks up capital. High inventory signals weak buyer relationships or price standoffs.',                    bands: [['g','< 15 days','Fast'],['a','15–30 days','Mod'],['r','> 30 days','Slow']] },
  { cat: 'down', icon: 'TrendingUp',    title: 'Price Realisation',    formula: 'Average selling price per material ÷ Prevailing market rate',               desc: 'Measures whether the MRF is achieving fair prices relative to market benchmarks.',                                          bands: [['g','> 90%','Prem'],['a','75–90%','Avg'],['r','< 75%','Low']] },
  { cat: 'down', icon: 'Layers',        title: 'Revenue Streams',      formula: 'Count of distinct income sources',          desc: 'Active material channels. More streams signal better sorting and higher facility value.',                                  bands: [['g','> 3','Opt'],['a','2–3','Std'],['r','< 2','Ltd']] },
]

// Configuration for the self-assessment calculator (matches kpis above by id)
export const assessConfig = [
  { id: 'a1', label: 'Capacity utilisation', unit: '%',      placeholder: 'e.g. 70',  green: [70, 90],   amber: [50, 70],  inverted: false, tip: 'Review collection coverage and BWG pipeline' },
  { id: 'a2', label: 'Recovery efficiency',  unit: '%',      placeholder: 'e.g. 58',  green: [85, 100],  amber: [70, 85],  inverted: false, tip: 'Improve gate grading and sorting accuracy' },
  { id: 'a3', label: 'Distinct Revenue Streams',   unit: 'count',    placeholder: 'e.g. 4',  green: [4, 99999999],    amber: [2, 4], inverted: false,  tip: 'Manage diversification to mitigate risk exposure' },
  { id: 'a4', label: 'Labour productivity',  unit: 'kg/day', placeholder: 'e.g. 200', green: [250, 9999],amber: [150, 250],inverted: false, tip: 'Check absenteeism and cross-training coverage' },
  { id: 'a5', label: 'Inventory Turnover',   unit: 'days',      placeholder: 'e.g. 10',   green: [0, 15],     amber: [15, 30],   inverted: true,  tip: 'Investigate working capital or quality deterioration risk' },
  { id: 'a6', label: 'Cost per kg',          unit: '₹',      placeholder: 'e.g. 6',   green: [0, 5],     amber: [5, 8],    inverted: true,  tip: 'Track disposal costs and recovery rate separately' },
]