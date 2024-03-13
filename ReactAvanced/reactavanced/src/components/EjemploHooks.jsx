import React, {useMemo, useCallback} from 'react'
import { useState } from 'react';

//useMemo --> React.memo() --> Funciones Creacionales de componentes que deben mostrar algo
//useCallBack --> React.useCallback() Memoizar valores listados en la dependencia. Funciones en linea


const MiComponente = () => {

    const [name, setName] = useState('');

    const names = [
        'Martin',
        'Erick'
    ]

    const getName = useCallback(
        () => {
            //Obtener un nombre aleatorio
            const random = Math.floor(Math.random() * names.length -1)
            setName(names[random]);
        },
        [name],
    );

    const clearName = useCallback(
        () => {
            setName(null);
        }, []
    )

    return (
        <h1>
            Mi componente
        </h1>
    )
}
 


