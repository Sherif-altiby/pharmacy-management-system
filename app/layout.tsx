import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar />
         <div className="absolute left-0 xl:left-[220px] right-0 bg-page-color bottom-0 top-16 p-4" >
              {children}
         </div>
              <Menu />
      </body>
    </html>
  );
}
