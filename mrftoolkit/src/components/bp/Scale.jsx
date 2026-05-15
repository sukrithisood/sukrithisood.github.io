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
            Material-based expansion focuses on increasing the quantity, quality, or value of materials processed and recovered through the MRF ecosystem. <br> 
            Feedstock-based: Collection scale up <br>
            Processing-based: Enhanching value of existing end materials and diversification into additional waste streams <br>
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
            Data, reporting, and traceability services <br>
            Plastic credits and impact-linked services
          </p>
        </article>
        <article className="scale-card">
          <div className="scale-card__icon">
            <Icon name="ClipboardCheck" size={20} />
          </div>
          <h4 className="scale-card__title">ULB-lens tips: Cluster-based growth through interoperable partnerships</h4>
          <p className="scale-card__body">
            MRF operators may explore cluster-based expansion by working with neighbouring ULBs under aligned contractual structures. Since waste management is administered as a local subject, neighbouring cities often operate through entirely separate contracts, payment mechanisms, and operational expectations, creating high coordination and transaction costs for regional scale-up. Where supported by strong institutional relationships and state-level facilitation, operators can explore interoperable or standardised agreements across multiple ULBs using common contract templates, aligned SLAs, and similar payment structures. This can significantly improve operational efficiency, aggregation potential, and long-term scalability across regional waste clusters.
          </p>
        </article>
      </div>

      <p className="scale-footer-note">
        Detailed scaling templates and case studies will be added in subsequent updates of this toolkit.
      </p>
    </article>
  )
}