import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({
  avatar,
  name,
  isOnline,
  id,
}) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}> {isOnline === true ?
        <div className={styles.greenLabel}></div> : <div className={styles.redLabel}></div>}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}

export { FriendListItem }