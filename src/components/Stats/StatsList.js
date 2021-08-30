import { Statistics } from './Statistics';
import styles from './Statistics.module.css';
import statisticalData from './statistical-data.json';

function StatsList() {
  return (
    <section className={styles.statisics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {statisticalData.map(data => (
          <Statistics
            id={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </ul>
    </section>
  )
}

export { StatsList }