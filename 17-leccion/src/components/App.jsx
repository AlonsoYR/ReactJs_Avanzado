import React, { useEffect, useState } from "react";
import TaskList from "./lists/TaskList";
import '../index.css';
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion";

/**
*Función anonima para crear un Componente Principal
* @returns {React.Component} Componente principal de nuestra aplicación
*/

const App = () => {
    const [dark, setDark] = React.useState(false);
    const [showSettings, setshowSettings] = useState(false);
    /**
     * Documentacion de useEffect
     * Se crea una variable de estado donde se almacena el valor de la configuración en localStorage    
     */

    useEffect(() => {
        // const config = JSON.parse(localStorage.getItem("config"));
        // setDark(config.theme);
        setDark(false);
    }, []);

    /**
     * Función para intercambiar la variable de estado light <-> dark
     */
    const toggleDark = () => {
        setDark(!dark);
    };

    return (
        <div className={`${dark ? "dark" : ""}`}>
            <div className={`text-center h-screen p-4 flex flex-col bg-gray-100 dark:bg-slate-800 transition dark:text-gray-50`}>
                <TaskList 
                showSettings={showSettings}
                setshowSettings={setshowSettings}
                />
                {/* Ocurre un error con el comando 'exitBeforeEnter' ya que se encuentra en desuso y se remplaza por el mode= "wait"*/}
                <AnimatePresence initial={false} mode="wait" onExitComplete={() => null} > 
                    {showSettings && 
                        <motion.div initial={{ y:'100vh'}} animate={{ y:'0' }} exit={{ y:'100vh' }}>
                            <Settings toggleDark={toggleDark} />
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default App;