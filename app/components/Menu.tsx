"use client"

import Link from "next/link"

import { FaStaffSnake } from "react-icons/fa6";
import { MdAddCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSquarePollVertical } from "react-icons/fa6";
import { TbWritingSign } from "react-icons/tb";


const items = [
     {title: "أضف دواء", link:'add-medicene', icon: MdAddCircle, duration: 100 },
     {title: "البحث عن دواء", link:'search-medicene', icon: FaSearch, duration: 200 },
     {title: "حذف دواء", link:'delete-medicene', icon: MdDelete , duration: 300} , 
     {title: "تعديل دواء", link:'edit-medicene', icon: AiFillEdit, duration: 400} , 
     {title: "بيع دواء", link:'sell-medicene', icon: FaCartArrowDown, duration: 500 },
     {title: "كشف المبيعات", link:'statics', icon: FaSquarePollVertical, duration: 600} , 
     {title: "بيع الشكوك", link:'sell-shokok', icon: TbWritingSign, duration: 700 },
     {title: "كشف مبيعات الشكوك", link:'statics-shokok', icon: FaSquarePollVertical, duration: 800 },
    ]

const Menu = ( {closeMenu, menuBlock}: {closeMenu: () => void, menuBlock: boolean} ) => {

  return (
   <>
    <div className={` ${menuBlock ? 'absolute top-16 right-0 left-0 z-30 bg-overlay bottom-0 ' : '' } `} onClick={closeMenu} ></div>
    <div className={`fixed top-0 xl:left-[0] bg-white w-[220px] bottom-0 text-white ${menuBlock ? 'left-0' : 'left-[-220px]'} duration-300 z-50 dark:bg-black `} >
        <div>
            <div className="flex items-center justify-center space-x-3 text-btn-color dark:text-white h-16 shadow-sm dark:shadow-gray-500" data-aos="zoom-in" >
                 <div className="text-3xl" ><FaStaffSnake /></div>
                 <p className="text-xl" > Pharmacy </p> 
            </div>
            {items.map((item) => (
                <Link href={item.link} key={item.title} onClick={closeMenu} className="pl-3 pr-6 block py-2" >
                      <div className="text-btn-color flex gap-2 rounded-md duration-200 justify-end hover:bg-page-color p-2 dark:text-white dark:hover:text-black cursor-pointer" data-aos="fade-right" data-aos-duration={`${item.duration}`} >
                         <p className="font-medium text-lg" > {item.title} </p>
                         <div className="text-2xl" > {item.icon?  <item.icon /> : null} </div>
                      </div>
                </Link>
            )) } 
        </div>
    </div>
   </>
  )
}

export default Menu