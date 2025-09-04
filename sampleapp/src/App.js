import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>
        <p>
          We’re testing our setup to ensure Docker creates a fresh image whenever the main branch is updated.
        </p>
      </header>
    </div>
  );
}

export default App;
