import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;








// import React from 'react';
// import './App.css';

// function App() {

//   const names = [
//     'Martín',
//     'Eric',
//   ];

//   return (
//     <GeneradorNombres names={names} />
//   );
// }

// function GeneradorNombres(props) {
//   const { names } = props;
//   const [name, setName] = React.useState(names[0]);
//   const getName = React.useCallback(
//     () => {
//       const index = Math.floor(Math.random() * (names.length));
//       setName(names[index]);
//     },
//     [names]
//   );

//   const clearName = React.useCallback(
//     () => {
//       setName(null)
//     },
//     []
//   );

//   return (
//     <div className='app'>
//       <h1>Memoize de React con use Memo y useCallback</h1>
//       {React.useMemo(
//         () => {
//           console.log('Renderización Nombre');
//           return (
//             <div>
//               <h2>Nombre Generado: {name ? name : 'Sin Nombre'} </h2>
//             </div>
//           );

//         },
//         [name]
//       )}

//       <Button label='Generar Nombre' click={getName} />
//       <Button label='Borrar Nombre' click={clearName} />

//     </div>
//   );
// }

// function WrappedButton(props) {
//   console.log('Renderización Botón');
//   return (
//     <button onClick={() => {
//       props.click();
//     }}
//     >
//       {props.label}
//     </button>
//   );
// }
// const Button = React.memo(WrappedButton);

// export default App;
