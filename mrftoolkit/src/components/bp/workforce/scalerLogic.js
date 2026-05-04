// src/components/bp/workforce/scalerLogic.js
import { baseRoles } from '@/data/workforce'

/**
 * Compute workforce headcount for a given TPD.
 * Roles with `scale: true` scale linearly from their per10 baseline.
 * Roles with `scale: false` stay flat (you always need 1 supervisor).
 * Returns { roles: [...with current], total }
 */
export function computeWorkforce(tpd) {
  const roles = baseRoles.map((r) => {
    let count
    if (r.scale) {
      count = Math.max(r.min, Math.round((r.per10 * tpd) / 10))
    } else {
      count = r.per10
    }
    return { ...r, count }
  })
  const total = roles.reduce((sum, r) => sum + r.count, 0)
  return { roles, total }
}

/**
 * Returns a contextual note based on TPD range.
 */
export function scalerNote(tpd) {
  if (tpd <= 5) {
    return 'At this scale, manual operations dominate. Cross-train every worker on at least two roles — losing one person should never halt the line.'
  }
  if (tpd <= 15) {
    return 'This is the reference range for the 10 TPD baseline. Consider a semi-mechanised conveyor if feedstock is predominantly mixed waste.'
  }
  if (tpd <= 30) {
    return 'Above 15 TPD, semi-mechanisation pays back within 18–24 months. Add a second shift before adding workers to a single shift.'
  }
  return 'At this scale, optical sorting becomes viable. Sorter headcount may drop 30–40% with mechanised lines. Plant supervisor span-of-control should not exceed 12.'
}