// src/components/panels/ToolsPanel.jsx
import { tools, toolsIntro } from '@/data/tools'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import './ToolsPanel.css'

export default function ToolsPanel() {
  // Build a download URL that works in dev and prod (BASE_URL = '/mrftoolkit/')
  const downloadHref = (file) => `${import.meta.env.BASE_URL}downloads/${file}`

  return (
    <section id="sec-tools" className="panel panel--tools">
      <Container>
        <SectionHeader
          eyebrow="Templates"
          title="Tools and templates"
          subtitle={toolsIntro}
        />

        <div className="tools-grid">
          {tools.map((t) => (
            <article key={t.id} className="tool-card">
              <div className="tool-card__icon">
                <Icon name={t.icon} size={22} />
              </div>
              <h3 className="tool-card__title">{t.title}</h3>
              <a
                href={downloadHref(t.file)}
                className="tool-card__btn"
                download
                aria-label={`Download ${t.title}`}
              >
                <Icon name="Download" size={14} />
                <span>Download</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}