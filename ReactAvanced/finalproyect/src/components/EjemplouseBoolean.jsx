import React, { useEffect, useRef, useState } from 'react';

// useBoolean Hook
const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const updateValue = useRef({
        toggle: () => setValue(oldValue => !oldValue),
        on: () => setValue(true),
        off: () => setValue(false)
    }
    )

    return [value, updateValue.current]
}

const EjemplouseBoolean = () => {

    const [lista, setLista] = useState([]);

    // Uso de Hook useBoolean
    const [cargando, setCargando] = useBoolean(false);
    const [error, setError] = useBoolean(false);

    //Al iniciar el componente, cargamos la lista

    useEffect ( () => {
        setCargando.on() //cargando = true
        fetch ('https://regres.in/users')
            .then((response ) => response.json())
            .then(setLista)
            .catch((error) => {
                alert(`Ha ocurrido un error: ${error}`);
                setError.on(); //error = true
            })
            .finally( ()=> setCargando.off())

    },
    [lista, setCargando,setError]);

    return (
        <div>
            <p>{cargando? 'cargando...' : null}</p>
            <p>{error ? 'Ha ocurrido un error': null}</p>
        </div>
    );
}

export default EjemplouseBoolean;
