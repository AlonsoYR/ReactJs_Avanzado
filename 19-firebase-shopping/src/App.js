import {app} from './firebase';
import Header from './components/Header';
import React, {useState, createContext} from 'react';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import { LiaGripfire } from "react-icons/lia";
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState("home");
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <Toaster/>
      <Header/>
      <main className='p-6'>
        {route === "home" && <Home/>}
        {route === "login" && <Login />}
        {route === "register" && <Register/>}
        {user && <p>Usuario Logueado: {user.email}</p>}
      </main>
    </AppContext.Provider>
  );
}

export default App;
