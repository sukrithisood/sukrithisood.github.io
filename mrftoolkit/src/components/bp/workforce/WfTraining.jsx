// src/components/bp/workforce/WfTraining.jsx
import { trainingByRole } from '@/data/workforce'
import Icon from '../../ui/Icon'

export default function WfTraining() {
  return (
    <div>
      <p className="train-intro">
        Training is most effective when role-specific and continuous. Foundational onboarding for
        new joiners, refreshers when quality issues surface, and advanced modules tied to promotion.
        All role-specific training should be delivered at the facility with real materials.
      </p>

      {/* Desktop: proper table */}
      <div className="train-table-wrap" role="region" aria-label="Role-wise key trainings">
        <table className="train-table">
          <caption className="sr-only">Role-wise key trainings needed</caption>
          <thead>
            <tr>
              <th scope="col" style={{ width: '22%' }}>Role</th>
              <th scope="col">Key skills and trainings needed</th>
            </tr>
          </thead>
          <tbody>
            {trainingByRole.map((r) => (
              <tr key={r.role}>
                <th scope="row" className="train-table__role">
                  <div className="train-table__role-inner">
                    <span className="train-table__role-icon">
                      <Icon name={r.icon} size={16} />
                    </span>
                    <span>{r.role}</span>
                  </div>
                </th>
                <td>
                  <ul className="train-skills">
                    {r.skills.map((s) => (
                      <li key={s.topic}>
                        <strong>{s.topic}:</strong> {s.body}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="train-cards">
        {trainingByRole.map((r) => (
          <article key={r.role} className="train-card">
            <header className="train-card__head">
              <span className="train-card__icon">
                <Icon name={r.icon} size={18} />
              </span>
              <h5 className="train-card__role">{r.role}</h5>
            </header>
            <ul className="train-skills">
              {r.skills.map((s) => (
                <li key={s.topic}>
                  <strong>{s.topic}:</strong> {s.body}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}