import React, { useState } from 'react'

const InputNuevaNota = ({addNuevaNota}) => {
    const [nuevaNota, setNuevaNota] = useState("");
  return (
    <div className='input-nueva-nota'>
        <input 
            type='text' 
            placeholder='Introduce una nueva nota' 
            value={nuevaNota} 
            onKeyDown={(e) => e.key === 'enter' && addNuevaNota(nuevaNota)} 
            onChange={(e) => setNuevaNota(e.target.value)}
        />
        <button onClick={() => addNuevaNota(nuevaNota)}>
            Añadir
        </button>
    </div>
  )
}

export default InputNuevaNota
