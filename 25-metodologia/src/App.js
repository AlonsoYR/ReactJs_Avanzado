import { useEffect, useState } from 'react';
import './App.css';
import { getNotes } from './controllers/frontController';
import Notes from './front/Notes';
import AtomixDesing from './front/AtomixDesing';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
    .then(n => setNotes(n))
    .catch(e => console.error(e))
  }, [])

  return (
    <div className="App">
      <h1>App Notas</h1>
      {/*<Notes notes={notes}/>*/}
      <AtomixDesing/>
    </div>
  );
}

export default App;
