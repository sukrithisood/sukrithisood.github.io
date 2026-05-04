// src/components/bp/Workforce.jsx
import { useState } from 'react'
import { workforceIntro, workforceTabs } from '@/data/workforce'
import WfScaler from './workforce/WfScaler'
import WfTraining from './workforce/WfTraining'
import WfPayment from './workforce/WfPayment'
import WfRecognition from './workforce/WfRecognition'
import './Workforce.css'

const TabComponents = {
  scaler:      WfScaler,
  training:    WfTraining,
  payment:     WfPayment,
  recognition: WfRecognition,
}

export default function Workforce() {
  const [activeTab, setActiveTab] = useState('scaler')
  const TabComponent = TabComponents[activeTab]

  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Workforce planning and training</h3>
      <p className="bp-panel__intro">{workforceIntro}</p>

      <nav className="wf-tabs" aria-label="Workforce sections">
        {workforceTabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`wf-tab ${activeTab === t.id ? 'wf-tab--active' : ''}`}
            onClick={() => setActiveTab(t.id)}
            aria-pressed={activeTab === t.id}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <TabComponent />
    </article>
  )
}