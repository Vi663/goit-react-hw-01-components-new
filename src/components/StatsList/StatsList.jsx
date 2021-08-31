import { Statistics } from './Statistics';
import s from './Statistics.module.css';
import statisticalData from '../../Data/statistical-data.json';

export function StatsList() {
  return (
    <section className={s.statisics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {statisticalData.map(data => (
          <Statistics
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </ul>
    </section>
  )
}