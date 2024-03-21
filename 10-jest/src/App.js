import { useState } from 'react';
import './App.css';
import ListadoNotas from './components/ListadoNotas';
import InputNuevaNota from './components/InputNuevaNota';

function App() {
  const [notas, setNotas] = useState(["Hacer la compra"]);

  const addNuevaNota =(nuevaNota) => {
    setNotas([...notas, nuevaNota])
  }
  
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Sesión 11</h1>
        <h3>Esto va a ser una (otra) aplicación de notas</h3>
        <InputNuevaNota addNuevaNota={addNuevaNota}/>
        <ListadoNotas notas={notas}/>
      </header>
    </div>
  );
}

export default App;
