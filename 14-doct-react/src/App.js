import * as React from 'react';
import './App.css';

const str: string = 'Hola Mundo';
const num: number = 6;

type AppProps = {
  saludo: string,
  numero?: number
}

// type AppProps = {
//   saludo: string
// }

/**
 * Aplicación principal sobre la  que trabajamos
 *
 * @param {*} props
 * @returns
 */

// function App(props: AppProps): React.Node {
function App(props: AppProps): React.Node {
  const [darkMode, setDarkMode] = React.useState(true);
  const [tasklist, setTaskList] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  /**
   *
   * @returns Cambia el modo de light -> dark y viceversa
   */
  const toggleDark = () => setDarkMode(!darkMode);

  /**
   * Esta función cambia el estado newTask a través del input
   *
   * @param {*} e - Evento de change proveniente de react
   * @returns
   */

  const handleChange = e => setNewTask(e.target.value);

  /**
   *
   * @returns Añade una nueva tarea a lista de tareas
   */
  const addNewTask = () => setTaskList([...tasklist, newTask]);

  /**
   * 
   * @returns true si la lista esta vacía
   */
  const tasklistEmpty = () => tasklist.length === 0;


  return (
    <div className={`App ${darkMode && "dark"}`}>
      <h1>{props.saludo}</h1>
      <button className='toggleDark' onClick={toggleDark}>Cambiar modo</button>
      <h2>Task List</h2>
      <div>
        <input style={{ marginRight: 5 }} type="text" value={newTask} onChange={handleChange} />
        <button className='toggleDark' onClick={addNewTask}  > Añadir Task</button>
        <div>{tasklistEmpty() ? <h3>La lista de tareas está  vacía</h3> :
          tasklist.map((t, i) => <p key={i}>{t}</p>)}</div>
      </div>
    </div>
  );
}

export default App;
