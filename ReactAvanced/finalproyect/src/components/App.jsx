import React, { useEffect } from "react";
import TaskList from "./lists/TaskList";
import '../index.css';
import Settings from "./settings/Settings";


/**
*Función anonima para crear un Componente Principal
* @returns {React.Component} Componente principal de nuestra aplicación
*/

const App = () => {
    const [dark, setDark] = React.useState(false);

    /**
     * Documentacion de useEffect
     * Se crea una variable de estado donde se almacena el valor de la configuración en localStorage    
     */

    useEffect(() => {
        const config = JSON.parse(localStorage.getItem("config"));
        setDark(config.theme);
    }, []);

    /**
     * Función para intercambiar la variable de estado light <-> dark
     */
    const toggleDark = () => {
        setDark(!dark);
    };

    return (
        <div className={`App ${dark ? "dark" : ""}`}>
            <TaskList />
            <hr style={{ marginTop: 20, marginBottom: 20 }} />
            <Settings toggleDark={toggleDark} />
        </div>
    );
};

export default App;