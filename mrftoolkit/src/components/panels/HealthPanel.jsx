// src/components/panels/HealthPanel.jsx
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import AssessmentCalculator from '../health/AssessmentCalculator'
import KpiReference from '../health/KpiReference'
import './HealthPanel.css'

export default function HealthPanel() {
  return (
    <section id="sec-health" className="panel panel--health">
      <Container>
        <SectionHeader
          eyebrow="MRF Health"
          title="Health indicators and self-assessment"
          subtitle="Enter your facility's current values to see performance zones - then explore all 15 indicators with benchmarks calibrated for Indian MRF conditions"
        />
        <AssessmentCalculator />
        <KpiReference />
      </Container>
    </section>
  )
}