import logo from './logo.svg';
import './App.css';
import Updater from './components/sw/Updater';

function App() {
  const version = "app-V4-Front";
  return (
    <div className="App">
      <h1 className='h1-color'>Versión {version}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Updater />
    </div>
  );
}

export default App;
