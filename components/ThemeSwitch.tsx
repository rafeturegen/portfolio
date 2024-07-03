"use client";

import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
    
  const { activeTheme, toggleTheme} = useTheme();

  return (
    <button
    className='fixed bottom-5 right-5 w-12 h-12 rounded-full border border-white/40 flex justify-center items-center hover:scale-[1.15] bg-white bg-opacity-80 shadow-2xl active:scale-105 transition-all  backdrop-blur-[0.5rem] dark:bg-gray-950'
    onClick={toggleTheme}
    >
        {activeTheme === "light" ? <BsSun/> : <BsMoon/>}
    </button>
  )
}
