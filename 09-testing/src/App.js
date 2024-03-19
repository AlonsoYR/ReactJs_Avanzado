import React from 'react';
import './App.css';
import Todo from './testcomponents/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Testing</h1>
        <Todo todo= {{id: 1, text: "Hacer la cama", completed: false }}/>
      </header>
    </div>
  );
}

export default App;
