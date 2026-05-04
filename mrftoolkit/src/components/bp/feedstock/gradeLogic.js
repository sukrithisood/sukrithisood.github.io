// src/components/bp/feedstock/gradeLogic.js
/**
 * Classify a load based on the set of selected gate signals.
 * Returns an object with `grade`, `tone`, `title`, `body`, and `action`.
 */
export function classifyGrade(selected) {
  const has = (id) => selected.has(id)

  if (selected.size === 0) {
    return null
  }
  if (has('haz')) {
    return {
      grade: 'C',
      tone: 'danger',
      title: 'Hazardous material detected — hold the load',
      body: 'A hazardous item visible in the load means the entire batch must be held pending a supervisor decision. Options: return to source with a written rejection note, segregate hazardous items under full PPE, or redirect the load. Do not allow entry to the sorting stream under any circumstance.',
      action: 'Supervisor decision required',
      escalate: true,
    }
  }
  const negatives = ['wet', 'mixed', 'uncov'].filter(has).length
  const positives = ['dry', 'seg', 'cov', 'known'].filter(has).length

  if (negatives >= 2) {
    return {
      grade: 'C',
      tone: 'danger',
      title: 'Heavily contaminated — do not route to main sorting line',
      body: 'Multiple contamination signals are present. Routing this load directly to the sorting line will degrade surrounding batches, slow throughput, and raise rejection rates. Supervisor must decide: return to source, accept to a separate holding zone, or redirect to a mixed-waste process.',
      action: 'Supervisor decision required',
      escalate: true,
    }
  }
  if (negatives === 1 && positives <= 1) {
    return {
      grade: 'B',
      tone: 'warning',
      title: 'Manageable contamination — route to pre-sort check zone',
      body: 'The load has a contamination signal but is not severely compromised. A quick manual pass in the pre-sort check zone will remove the problematic material before it enters the main line. Allow additional dwell time if moisture is present. Document the contamination signal in the WRN.',
      action: 'Pre-sort check zone',
      escalate: false,
    }
  }
  return {
    grade: 'A',
    tone: 'success',
    title: 'Clean and segregated — route directly to sorting line',
    body: 'This load meets the standard for direct intake. Complete the WRN, weigh the load, and route to the primary sorting station. Note the source as a high-performing supplier in your records — consistent Grade A sources warrant stronger commercial relationships and priority scheduling.',
    action: 'Direct to sorting line',
    escalate: false,
  }
}