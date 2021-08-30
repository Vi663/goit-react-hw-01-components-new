import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const ProfileStatsList = ({
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  )
};

ProfileStatsList.propTypes = {
  stats: PropTypes.arrayOf().isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
}

export { ProfileStatsList };