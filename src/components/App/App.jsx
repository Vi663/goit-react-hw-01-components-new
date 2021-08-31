import { MainContainer } from '../MainContainer/MainContainer'
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { StatsList } from '../StatsList/StatsList';
import { FriendList } from '../FriendList/FriendList';
import { TransactionList } from '../TransactionList/TransactionList';


export function App() {
  return (
    <MainContainer>
      <ProfileCard />
      <StatsList />
      <FriendList />
      <TransactionList />
    </MainContainer>
  )
}