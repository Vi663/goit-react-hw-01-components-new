import user from './user.json';
import { Profile } from './Profile';
import { ProfileStatsList } from './ProfileStatsList';
import styles from './Profile.module.css';

function ProfileCard() {
  return (
    <div className={styles.profile}>
      <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileStatsList
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  )
}
export {ProfileCard}