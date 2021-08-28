import {FriendListItem} from './FriendListItem'
import friends from './friends.json';

function FriendList() {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
          <FriendListItem
            id={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
    </ul>
  )
}

export { FriendList };
