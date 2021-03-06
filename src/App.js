import Profile from './components/profile/Profile';
import user from './data/user.json';

import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './friends';
import FriendList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
