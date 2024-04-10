import React, {useContext} from 'react';
import { GoHomeFill } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { AppContext } from '../App';

const Footer = () => {
    const {setRoute} = useContext(AppContext); 
  return (
    <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
        <div className='bg-sky-200 p-2 text-3xl rounded-full text-amber-700' onClick={() => setRoute('home')}>
            <GoHomeFill />
        </div>
        <div className='bg-sky-200 p-2 text-3xl rounded-full text-amber-700' onClick={() => setRoute('shopping')}>
            <TiShoppingCart />
        </div>
    </footer>
  )
}

export default Footer
