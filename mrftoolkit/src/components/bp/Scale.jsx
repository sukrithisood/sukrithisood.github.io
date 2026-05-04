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
          <h4 className="scale-card__title">MRF Landscape</h4>
          <p className="scale-card__body">
            Increasing regulatory stringency and evolving rules are creating opportunities for MRFs to position themselves as compliance partners for brands, ULBs, and PROs. 
            Rapid urbanisation and consumption patterns are introducing new and complex waste streams. 
            Regionalised expansion opportunities.
          </p>
        </article>

        <article className="scale-card">
          <div className="scale-card__icon">
            <Icon name="Layers" size={20} />
          </div>
          <h4 className="scale-card__title">Revenue diversification</h4>
          <p className="scale-card__body">
            Three tiered revenue: core, enhanced revenue on existing throughput, new material and service streams.
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