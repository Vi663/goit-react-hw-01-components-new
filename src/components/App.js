import './App.css';
import user from '../user.json';

import { Profile } from './Profile/Profile';
import { ProfileStatsList } from './Profile/ProfileStatsList';

function App() {
  return (
    <div className="profile">
      <Profile
        // key={tag}
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
    // 
  )
}

export { App };
