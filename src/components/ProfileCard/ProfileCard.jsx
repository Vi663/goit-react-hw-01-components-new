import user from '../../Data/user.json';
import { Profile } from './Profile';
import { ProfileStatsList } from './ProfileStatsList';
import s from './Profile.module.css';

export function ProfileCard() {
  return (
    <div className={s.profile}>
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