// src/components/bp/Scale.jsx
import Icon from '../ui/Icon'

export default function Scale() {
  return (
    <article className="bp-panel-content">
      <h3 className="bp-panel__title">Expansion and scaling up</h3>
      <p className="bp-panel__intro">
        Scaling up an MRF means moving beyond a single-site operation into a network — multiple
        satellite collection points, layered revenue streams, and a replicable operating model
        that other cities or partners can adopt.
      </p>

      <div className="bp-section-divider" />

      <div className="scale-cards">
        <article className="scale-card">
          <div className="scale-card__icon">
            <Icon name="MapPin" size={20} />
          </div>
          <h4 className="scale-card__title">Material-based Expansion</h4>
          <p className="scale-card__body">
            Material-based expansion focuses on increasing the quantity, quality, or value of materials processed and recovered through the MRF ecosystem. 
            Feedstock-based: Collection scale up 
            Processing-based: Enhanching value of existing end materials and diversification into additional waste streams
            Sales-based: Downstream integrations (vertical/ horizontal) via JVs or in-house
          </p>
        </article>

        <article className="scale-card">
          <div className="scale-card__icon">
            <Icon name="Layers" size={20} />
          </div>
          <h4 className="scale-card__title">Service-based Expansion</h4>
          <p className="scale-card__body">
            Service-based expansion focuses on leveraging operational capabilities, data systems, and ecosystem relationships beyond core material recovery functions. Common pathways include:
            EPR and compliance support services
            Waste audits and technical consultancy
            Data, reporting, and traceability services
            Plastic credits and impact-linked services
          </p>
        </article>
        <article className="scale-card">
          <div className="scale-card__icon">
            <Icon name="ClipboardCheck" size={20} />
          </div>
          <h4 className="scale-card__title">Working with ULBs</h4>
          <p className="scale-card__body">
            Relationship management best practices
          </p>
        </article>
      </div>

      <p className="scale-footer-note">
        Detailed scaling templates and case studies will be added in subsequent updates of this toolkit.
      </p>
    </article>
  )
}