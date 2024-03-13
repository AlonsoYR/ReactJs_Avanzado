import React, { useEffect, useRef, useState } from 'react';

//useBoolean Hook
const useBoolean = (initialValue) => {
    const[value,setValue] = useState(initialValue);

    const updateValue = useRef({
        toggle: () => setValue(oldvalue => !oldvalue),
        on: () => setValue(true),
        off:() => setValue(false)
    })

    return[value,updateValue.current]
}

const EjemploBoolean = () => {
    
    const [lista, setlista] = useState([]);

    //Uso de Hook useBoolean
    const[cargando, setcargando] = useBoolean(false);
    const[error, seterror] = useBoolean(false);
    
    //Al iniciar el componente cargamos lista
    useEffect(() => {
        setcargando.on() //cargando = true
        fetch('httos:/reqres.in/users')
            .then((response) => response.json())
            .then(setlista) 
            .catch((error) => {
                alert('Ha ocurrido un error: ${ error }');
                seterror.on();  // error=true
            })
            .finally(() => setcargando.off)
    }, [lista, setcargando, seterror]);

  return (
    <div>
        <p>{cargando ? 'cargando...': null}</p>
        <p>{error ? 'Ha ocurrido un error': null}</p>
    </div>
  );
}


export default EjemploBoolean;