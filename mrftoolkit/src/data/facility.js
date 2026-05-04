// src/data/facility.js
export const facilityIntro = 'Good layout prevents operational congestion, protects material from contamination, and makes every workflow step faster. Design decisions made at setup are expensive to undo — invest thinking time upfront before any civil work begins.'

export const designPrinciples = [
  { num: 'Principle 01', icon: 'MoveVertical',  title: 'Optimise vertical space',           body: 'Use high-roof structures to allow better air circulation and heat dissipation. Enable stacking and vertical storage where feasible — height is free space that most facilities leave unused.' },
  { num: 'Principle 02', icon: 'Layers',        title: 'Incorporate mezzanine flooring',    body: 'Maximise usable floor area without expanding footprint. Use mezzanines for secondary sorting, temporary storage, supervisory stations, or control functions.' },
  { num: 'Principle 03', icon: 'MoveHorizontal',title: 'Build wider',                       body: 'Provide adequate turning radius for collection and transport vehicles. Avoid bottlenecks at entry points, sorting lines, and dispatch areas — congestion here cascades through the entire operation.' },
  { num: 'Principle 04', icon: 'CloudRain',     title: 'Rainwater and drainage management', body: 'Avoid direct exposure of feedstock to rain — wet material contaminates the stream and slows sorting. Plan for monsoon upfront. Raise the floor platform at minimum one foot above ground to prevent rainwater ingress.' },
]

export const siteSelectionCards = [
  {
    tone: 'success',
    icon: 'Users',
    title: 'Managing community opposition',
    tag: 'Community relations',
    body: 'Facilities near residential areas face opposition rooted in landfill perceptions — even when the MRF is a clean, value-creating space. The most effective counter is visibility.',
    tips: [
      'Run regular open-day citizen visits — let community members see the sorting floor, meet workers, and understand what happens to material',
      'Invite RWA representatives and local leaders for periodic walkthroughs — community advocates are more persuasive than institutional communication',
      'Display real-time data on material diverted from landfill at the facility entrance — makes the impact tangible',
      'A welcoming entrance — clean signage, a garden made of recovered materials — shapes perception before anyone walks in',
    ],
  },
  {
    tone: 'warning',
    icon: 'Globe',
    title: 'Distance from residential areas',
    tag: 'Location planning',
    body: 'Standard dry waste sorting MRFs can operate close to communities. Any value-addition process generating fumes requires a meaningful buffer distance.',
    tips: [
      'For sorting-only MRFs, proximity to catchment reduces transport costs — community location preferred where opposition can be managed',
      'Check flood and waterlogging maps before finalising — monsoon disruptions are a leading cause of operational loss',
      'Assess road access for vehicles — a facility unreachable during monsoon is effectively seasonal',
    ],
  },
]