"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

import { FaStaffSnake } from "react-icons/fa6";
import { MdAddCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSquarePollVertical } from "react-icons/fa6";
import { TbWritingSign } from "react-icons/tb";


const items = [
     {title: "أضف دواء", link:'add-medicene', icon: MdAddCircle},
     {title: "البحث عن دواء", link:'serach-medicene', icon: FaSearch},
     {title: "حذف دواء", link:'delete-medicene', icon: MdDelete}, 
     {title: "تعديل دواء", link:'edit-medicene', icon: AiFillEdit}, 
     {title: "بيع دواء", link:'sell-medicene', icon: FaCartArrowDown},
     {title: "كشف المبيعات", link:'statics', icon: FaSquarePollVertical}, 
     {title: "بيع الشكوك", link:'sell-shokok', icon: TbWritingSign},
     {title: "كشف مبيعات الشكوك", link:'statics-shokok', icon: FaSquarePollVertical}]

const Menu = () => {

  return (
    <div className="fixed top-0 left-0 bg-menu-color w-[230px] bottom-0 text-white" >
        <div>
            <div className="flex items-center justify-center space-x-3 border-b  h-16" >
                 <div className="text-3xl" ><FaStaffSnake /></div>
                 <p className="text-xl" > Pharmacy </p>
            </div>
            {items.map((item) => (
                <Link href={item.link} key={item.title} className="px-2 py-5 cursor-pointer hover:bg-btn-color duration-150 flex items-center space-x-5 justify-end" >
                      <p className="font-medium text-xl" > {item.title} </p>
                      <div className="text-2xl" > {item.icon?  <item.icon /> : null} </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Menu