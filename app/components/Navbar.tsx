import { FaBars } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


const Navbar = ( {openMenu}: {openMenu: () => void } ) => {
  return (
    <nav className="h-16 flex items-center border-b px-4 bg-white">
       <div className="container mx-auto flex justify-between items-center">
            <div className="w-8 h-8 rounded-full border flex justify-center items-center cursor-pointer" onClick={openMenu} > <FaBars /> </div>
                <div className="flex items-center space-x-7" >
                    <div className="hidden sm:flex items-center space-x-3" >
                        <div className="border rounded-full flex items-center px-3 py-1" > 
                            <div className="font-bold text-xl  pr-3" > <CiSearch /> </div>
                            <input className="border-none outline-none" type="text" placeholder="ابحث عن الدواء" /> 
                        </div>
                        <button className="bg-btn-color text-white cursor-pointer px-3 py-1 rounded-md font-medium text-md" > بحث </button>
                    </div>
                    <button className="bg-btn-color text-white cursor-pointer px-3 py-1 rounded-md font-medium text-md" > تسجيل الخروج </button>
                </div>
       </div>
    </nav>
  )
}

export default Navbar