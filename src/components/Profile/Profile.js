import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import styles from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
}) => {
  return (
    <div className={styles.description}>
      <img
        src={avatar}
        alt="user avatar"
        className={styles.avatar}
      />
      <p className={styles.name}><FaUserAlt /> {name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}><FaMapMarkerAlt /> {location}</p>
    </div>
  )
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node,
}

export {Profile}