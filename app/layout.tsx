"use client";


import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { Inter } from "next/font/google";

import 'aos/dist/aos.css';
import AOS from 'aos';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
     
    const [menuBlock, setMenuBlock] = useState(false)
     
    useEffect(() => {
      AOS.init()
    }, [])

    const openMenu = () => { setMenuBlock(true) };

    const closeMenu = () => { setMenuBlock(false) };
    
  return (
    <html lang="en">
      <body className={`${inter.className} bg-page-color dark:bg-zinc-900 overflow-x-hidden `}>
         <Navbar openMenu = {openMenu} />
                  <div className="absolute left-0 xl:left-[220px] right-0  bottom-auto top-16 p-4" >
                        {children}
                  </div>
          <Menu closeMenu={closeMenu} menuBlock= {menuBlock} />
      </body>
    </html>
  );
}
