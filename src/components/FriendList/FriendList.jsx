import { FriendListItem } from './FriendListItem'
import friends from '../../Data/friends.json';
import s from './FriendList.module.css';

export function FriendList() {
  return (
    <ul className={s.friendList}>
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