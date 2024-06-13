"use client";


import { useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
     
    const [menuBlock, setMenuBlock] = useState(false)

    const openMenu = () => { setMenuBlock(true) };

    const closeMenu = () => { setMenuBlock(false) };
   
  return (
    <html lang="en">
      <body className={`${inter.className} bg-page-color `}>
         <Navbar openMenu = {openMenu} />
                  <div className="absolute left-0 xl:left-[220px] right-0 bg-page-color bottom-auto top-16 p-4" >
                        {children}
                  </div>
          <Menu closeMenu={closeMenu} menuBlock= {menuBlock} />
      </body>
    </html>
  );
}
