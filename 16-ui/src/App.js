import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Boton text= "Hola mundo" color="secondary"/>
      </header>
    </div>
  );
}

export default App;
