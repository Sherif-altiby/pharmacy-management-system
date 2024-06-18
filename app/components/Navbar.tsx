"use client";

import { FaMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";

import { useState } from "react";


const Navbar = ( {openMenu}: {openMenu: () => void } ) => {
 
   const [darkMode, setDarkMode] = useState(false);

   const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
   }

  return (
    <nav className="h-16 flex items-center border-b dark:border-gray-600 px-4 bg-white dark:bg-black">
       <div className="container mx-auto flex justify-between items-center">
            <div className="w-8 h-8 rounded-full border flex justify-center items-center cursor-pointer dark:bg-white" onClick={openMenu} > <FaBars /> </div>
            <div className="flex items-center space-x-7"  data-aos="fade-left" >
                    <div className="hidden sm:flex items-center space-x-3" >
                        <div className="border rounded-full flex items-center px-3 py-1 bg-white" > 
                            <div className="font-bold text-xl  pr-3" > <CiSearch /> </div>
                            <input className="border-none outline-none" type="text" placeholder="ابحث عن الدواء" /> 
                        </div>
                        <button className="bg-btn-color text-white cursor-pointer px-3 py-1 rounded-md font-medium text-md" > بحث </button>
                    </div>
                    <button className="bg-btn-color text-white cursor-pointer px-3 py-1 rounded-md font-medium text-md" > تسجيل الخروج </button>
                    <div className="rounded-full w-7 h-7 flex items-center justify-center border cursor-pointer p-4 relative bg-white" onClick={handleDarkMode} > { darkMode ? <div className="text-black text-xl " >  <FaMoon /> </div> : <div className="text-yellow-600 text-xl " >  <IoIosSunny /> </div> } </div>
            </div>
       </div>
    </nav>
  )
}

export default Navbar