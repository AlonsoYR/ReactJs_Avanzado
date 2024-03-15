import './App.css';
import Updater from './components/sw/Updater';
import NotificationManager from './components/pure/NotificationManager';

function App() {
  const version = "app-V5-Front";
  return (
    <div className="App">
      <NotificationManager/>

      <Updater />
    </div>
  );
}

export default App;
