import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './services/userService';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload to learn react.
        </p>
        <p>
          Updated the App.js file to test the feature which is added.
        </p>
        <div>
          <h3>Fetched Users:</h3>
          <ul>
            {users.map(user => (
              <li key={user._id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
