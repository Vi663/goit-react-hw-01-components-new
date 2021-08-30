import { FriendListItem } from './FriendListItem'
import friends from './friends.json';
import styles from './FriendList.module.css';

function FriendList() {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  )
}

export { FriendList };
