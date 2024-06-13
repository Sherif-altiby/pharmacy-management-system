import SectionHeader from "../components/SectionHeader";

import { FaBarcode } from "react-icons/fa";


const AddMedicene = () => {
  return (
    <div>
      <SectionHeader title="أضافة أدوية " />
      <div>
        <form action="" className="flex flex-col w-full md:w-[600px] mx-auto mt-16 bg-card-bg p-3 rounded-md" >
              <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                  <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name"> اسم الدواء </label>
                  <input className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="text" id="name" placeholder="اسم الدواء" />
              </div>

             <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                 <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="price"> سعر العلبة </label>
                 <input className="border-none outline-none  text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="number" id="price" placeholder="سعر العلبة" />
             </div>

               <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                  <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="price"> عدد العلب </label>
                  <input className="border-none outline-none  text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="number" id="price" placeholder="عدد العلب" />
               </div>

              <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                  <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="date"> تاريخ الصلاحية </label>
                  <input className="border-none outline-none  text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="date" id="date" placeholder="عدد العلب" />
              </div>

              <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                  <label className="w-[90px] md:w-[120px] text-right flex items-center justify-end text-xl md:text-6xl" htmlFor="code"> <FaBarcode /> </label>
                  <input className="border-none outline-none  text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="number" id="code" placeholder="الكود" />
              </div>
            <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full" > حفظ </button>
        </form>
      </div>
    </div>
  )
}

export default AddMedicene