// src/data/processing2.js

export const proc2Intro = 'Quality control in an MRF is not a single activity but a system of checkpoints running through the entire process. Most quality failures happen not from carelessness but from the absence of defined standards at each stage, limited mechanisms to catch errors early, and weak feedback loops when issues are identified downstream.'

// Five sequential QC stations across the floor.
export const qcStations = [
  { num: 1, stage: 'Sorting line',       title: 'Standard references at the sorting line', body: 'Visual reference cards or laminated sheets showing accepted and rejected material for each category — posted at every sorting station. Ensures consistent identification across all sorters, not reliant on memory.', foot: 'At every sorting station' },
  { num: 2, stage: 'Real-time oversight', title: 'Quality Lead or Quality Ambassador',       body: "Designate one sorter per shift as Quality Lead. They do real-time spot checks on sorting output, flag errors immediately, and escalate recurring issues. Creates accountability without a top-down inspection dynamic.", foot: 'One per shift' },
  { num: 3, stage: 'Storage',             title: 'Dedicated zones with labelled max capacity', body: "Each material category has a dedicated storage zone, clearly labelled with the material name and maximum capacity. Prevents co-mingling, avoids floor congestion, and gives supervisors a visual signal when dispatch is needed.", foot: 'Label max capacity visibly' },
  { num: 4, stage: 'Baling',              title: 'Bale-level tagging for FIFO dispatch',     body: 'Every bale is tagged at the time of baling — material type, grade, date, and bale number. Tags enable FIFO (First In, First Out) dispatch, support traceability when buyers raise quality concerns, and form the basis for EPR documentation.', foot: 'Tag every bale at point of baling' },
  { num: 5, stage: 'Labelling',           title: 'Material names in standard and local language', body: 'All storage zones, sorting stations, and reference cards carry both the technical material name and the local trade name used by workers. Eliminates ambiguity and reduces misclassification from terminology gaps.', foot: 'Both languages on all labels' },
]

// Special-material handling tactics
export const specialCards = [
  { icon: 'Package', tone: 'accent',  title: "Unidentified or 'mystery' material box", tag: "At supervisor's desk", body: "Maintain an unidentified material box at the supervisor's desk. Any material that sorters cannot confidently classify is placed here for supervisor review rather than guessed at and misclassified. Prevents contamination of sorted streams from uncertain material." },
  { icon: 'Camera',  tone: 'danger',  title: 'Photo and log every hazardous or e-waste item', tag: 'Builds training reference library', body: 'Photograph and log every hazardous material or e-waste item that appears in the incoming stream. Over time, this builds a reference library for training new workers. It also supports source-level quality assessment — patterns in where items arrive can inform targeted collection interventions.' },
  { icon: 'Globe',   tone: 'info',    title: 'Location-specific vigilance', tag: 'Catchment-aware protocols', body: 'In facilities near hospitals, pharmacies, or nursing homes, sharps and blister packs can appear regularly in the dry waste stream. Regularly review new developments in the catchment area. A new clinic or pharmacy warrants a gate-level briefing before it affects incoming loads.' },
]

// Special-material protocol checklist (table)
export const protocolChecklist = [
  {
    material: 'Sharps (needles, syringes, blades)',
    risks: { tags: [{ label: 'Injury', tone: 'danger' }, { label: 'Infection', tone: 'danger' }], note: 'Puncture injury to sorters; potential blood-borne pathogen exposure.' },
    handling: 'Do not handle without puncture-resistant gloves. Isolate immediately using tongs or a scoop — never by hand. Place in a rigid sealed container. Alert supervisor immediately. Do not attempt to re-sort surrounding material without inspection.',
    disposal: 'Authorised biomedical waste collector. Never in general waste or recyclable stream. Log date, source, and quantity at each occurrence.',
  },
  {
    material: 'Blister packs and pharmaceutical packaging',
    risks: { tags: [{ label: 'Contamination', tone: 'warning' }], note: 'Chemical residue in foil-plastic composite; misclassified as MLP or rigid plastic.' },
    handling: 'Separate from standard MLP stream. Check for residual medication. If medication residue is present, treat as pharmaceutical waste. If clean and empty, classify based on material composition per buyer specifications.',
    disposal: 'Clean and empty: per buyer or MLP stream. With residue: pharmaceutical waste channel. Document all pharmaceutical packaging separately from standard MLP records.',
  },
]