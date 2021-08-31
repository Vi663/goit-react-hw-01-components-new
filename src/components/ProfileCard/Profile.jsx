import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import s from './Profile.module.css';

export const Profile = ({
  name,
  tag,
  location,
  avatar,
}) => {
  return (
    <div className={s.description}>
      <img
        src={avatar}
        alt="user avatar"
        className={s.avatar}
      />
      <p className={s.name}><FaUserAlt /> {name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}><FaMapMarkerAlt /> {location}</p>
    </div>
  )
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.node,
}