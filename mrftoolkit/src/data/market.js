// src/data/market.js

export const marketIntro = `The downstream market for recovered material is largely fragmented and heterogeneous. While some streams (PET, metals) operate within relatively formal and stable markets, most others — mixed plastics and lower-grade paper — are localised and informal, with variability in pricing, demand, and buyer reliability. Strong downstream linkages are critical to ensuring consistent material offtake, better price realisation, and stable cash flows. Treat buyer management as a structured function.`

export const marketTabs = [
  { id: 'output',        label: 'Output, Dispatch and Inventory Turnover' },
  { id: 'buyer',         label: 'Choosing the Right Buyer' },
  { id: 'relationships', label: 'Buyer Relationships' },
]

// ── Tab 1: Output ──
export const alignmentChips = [
  { id: 'ease',     label: 'Ease of Sales',         tip: 'Assess how easily each material category can be sold through available downstream channels.' },
  { id: 'ftl',      label: 'FTL Consideration',     tip: 'Plan dispatch around full-truck-load requirements where buyers or routes make aggregation useful.' },
  { id: 'quality',  label: 'Quality Consideration', tip: 'Align sorting, storage, and bale preparation with buyer quality expectations.' },
  { id: 'capital',  label: 'Working Capital Cycle', tip: 'Track how long material and payment remain locked before cash returns to the facility.' },
]

export const marketKpis = [
  { name: 'Inventory turnover rate',   formula: 'MT dispatched ÷ Average MT in storage',  note: 'How fast material moves out relative to what sits on the floor.' },
  { name: 'Days of inventory on hand', formula: 'MT in storage ÷ MT processed per day',   note: 'How many days of backlog is sitting; >15 days = problem.' },
  { name: 'Dispatch cycle time',       formula: 'Days from material sorted to dispatch',  note: 'Flags if sales relationships or logistics are causing delays.' },
  { name: 'Storage utilisation %',     formula: 'MT stored ÷ Storage capacity',           note: '>90% = congestion risk; floor workflow will break down.' },
]

export const dispatchPractices = [
  { num: 1, text: 'Multi-material loads for the same buyer' },
  { num: 2, text: 'Milk-run dispatch (aggregation model)' },
  { num: 3, text: 'Shared transport with nearby MRFs' },
]

// ── Tab 2: Choosing the right buyer ──
export const buyerEvaluation = [
  { id: 'pay',  label: 'Payment Terms (credit days)',         left: 'Shorter credit', right: 'Longer credit',  position: 45 },
  { id: 'log',  label: 'Logistics Responsibility',            left: 'MRF',            right: 'Buyer',          position: 55 },
  { id: 'gst',  label: 'GST Responsibility',                  left: 'MRF',            right: 'Buyer',          position: 50 },
]

export const priceCards = [
  { title: 'Conduct regular price discovery',     body: 'Use routine market checks to keep downstream price awareness current.' },
  { title: 'Compare across buyers and materials', body: 'Maintain visibility across different buyer quotes and material categories.' },
]

export const marketEvents = [
  { id: 'recycle', type: 'recycling', name: 'Recycle Expo India', org: 'ASSOCHAM / Private Organisers', when: 'Feb–Mar · Annual', why: "India's largest dedicated recycling trade show. Aggregators, plastic recyclers, paper mills, and metal traders all present. Strong floor for buyer discovery." },
  { id: 'wastecon', type: 'industry', name: 'WasteCon India',     org: 'FICCI / Private Consortiums',   when: 'Oct–Nov · Annual', why: 'Covers the full solid-waste value chain: collection, processing, disposal. ULB officials attend. Good for understanding contract trends and municipal procurement.' },
]

export const eventFilters = [
  { id: 'all',       label: 'All' },
  { id: 'recycling', label: 'Recycling' },
  { id: 'epr',       label: 'EPR' },
  { id: 'policy',    label: 'Policy' },
  { id: 'industry',  label: 'Industry' },
]

// ── Tab 3: Buyer Relationships ──
export const buyerLoops = [
  { title: 'Feedback Loop',         body: 'Collect, review, and act on buyer feedback to improve operations.', steps: ['Collect', 'Review', 'Act', 'Improve'] },
  { title: 'Buyer Interaction Log', body: 'Maintain structured records of buyer interactions, issues, and resolutions.', steps: ['Record', 'Track', 'Resolve'] },
]