import React, { useState, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from '../App';

const auth = getAuth();

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setRoute, setUser} = useContext(AppContext);
    const crearUsuario = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        console.log(user);
        toast(`¡Usuario ${email} registrado correctamente!`);
        // setEmail("");
        // setPassword("");
        setUser(user);
        setRoute("home");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        crearUsuario();
    }
  return (
    <div className='flex flex-col items-center gap-3'>
        <h1 className='text-sky-700 font-semibold'>¡Registrate para poder incorporarte en FireShopping!</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-sm'>
        <input placeholder='Email' className='border border-gray-500 rounded py-1 px-2 outline-none' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder='Password' className='border border-gray-500 rounded py-1 px-2 outline-none' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button className='btn-submit'>Registrar</button>
        </form>
    </div>
  )
}

export default Register
