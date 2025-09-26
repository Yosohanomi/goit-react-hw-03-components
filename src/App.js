import './App.css';

import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { FriendListItem } from './components/FriendListItem';
import { TransactionHistory } from './components/TransactionHistory';

const user = require('./json-files/user.json');
const data = require('./json-files/data.json');
const friends = require('./json-files/friends.json')
const transaction = require('./json-files/transactions.json')
function App() {
  return (
    <div className="App">
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={data}/>
      <FriendListItem friends={friends}/>
      <TransactionHistory items={transaction}/>
    </div>
  );
}

export default App;
