import logo from './logo.svg';
import './App.css';
import UserData from './component/UserData';

function App() {
  return (
    <div className="App">
      <UserData />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload to learn react.
          Handling the duplicate image creation.
        </p>
      </header>
    </div>
  );
}

export default App;
