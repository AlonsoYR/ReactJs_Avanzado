import logo from './logo.svg';
import './App.css';
import Updater from './components/sw/Updater';

function App() {
  const version = "app-V5-Front";
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='h1-color'>Versión {version}</h1>
      <h2 className='h2-color'>Applying and managing PWA</h2>
      </header>
      <Updater />
    </div>
  );
}

export default App;
