import React from 'react';
import { LiaGripfire } from "react-icons/lia";

const Header = () => {
  return (
    <header className='flex h-20 w-full bg-gray-100 shadow-lg items-center justify-between px-8'>
        <div className='flex items-center gap-2'>
          <LiaGripfire className='text-2xl text-amber-700'/>
          <span className='text-xl font-semibold text-amber-700'>FireShopping</span>
        </div>
        <button className='bg-slate-600 text-white py-1 px-3 rounded-full hover:bg-slate-800 transition'>Login</button>
    </header>
  )
}

export default Header
