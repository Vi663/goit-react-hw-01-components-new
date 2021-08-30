import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({
  id,
  label,
  percentage,
}) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label} </span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export { Statistics };