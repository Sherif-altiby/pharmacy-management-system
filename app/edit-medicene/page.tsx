"use client"

import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { FaBarcode } from "react-icons/fa";
import { Medicine } from "../types";
import Loading from "../components/Loading";
import { fetchMedicinesData } from "../utils";


const EditeMedicene = () => {


  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<Medicine[]>([]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetchData();
  };

  const fetchData = async () => {
    if (searchTerm.length > 0 && searchTerm !== "") { 
          setLoading(true) 
          const data = await fetchMedicinesData({ searchTerm});
          setMedicines(data.data);
          setLoading(false)
    } 
  };

  useEffect(() => { fetchData() }, [searchTerm]);
  

    return (
      <div>
        <SectionHeader title="تعديل ادوية" />
        <div data-aos="zoom-in" className="relative"  >
          <form action="" className="flex flex-col w-full md:w-[600px] mx-auto mt-5 bg-white dark:bg-transparent dark:shadow-sm dark:shadow-white dark:text-white p-3 rounded-md" onSubmit={handleSubmit} >
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name"> اسم الدواء </label>
                    <input 
                        className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" 
                        type="text" 
                        id="name" 
                        placeholder="اسم الدواء" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                </div>
          </form>
          <div className="mt-5">
          {loading ? ( <Loading />) : medicines.length > 0 ? (
            <div className="flex gap-3 justify-between items-center flex-wrap">
              {medicines.map((medicine) => {
                return (
                  <div key={medicine.id} className={`p-2 flex flex-col shadow-md bg-white dark:bg-black dark:text-white`}>
                       <div className="flex items-center gap-2 p-2 flex-row-reverse">
                             <label className="w-[90px]  text-right flex items-center justify-end text-md"  htmlFor="name"> اسم الدواء </label>
                             <input className="border-[#999] dark:bg-inherit dark:shadow-md dark:shadow-gray-800 border-1 shadow-md outline-none text-right pr-2 w-[200px]" type="text" placeholder={medicine.Name} />
                       </div>
                       <div className="flex items-center gap-2 p-2 flex-row-reverse">
                             <label className="w-[90px]  text-right flex items-center justify-end text-md"  htmlFor="name">  سعر الشريط </label>
                             <input className="border-[#999] dark:bg-inherit dark:shadow-md dark:shadow-gray-800 border-1 shadow-md outline-none text-right pr-2 w-[200px]" type="number" placeholder={`${medicine.Tape_Price}`} />
                       </div>
                       <div className="flex items-center gap-2 p-2 flex-row-reverse" >
                             <label className="w-[90px]  text-right flex items-center justify-end text-md"  htmlFor="name"> عدد الاشرطة </label>
                             <input className="border-[#999] dark:bg-inherit dark:shadow-md dark:shadow-gray-800 border-1 shadow-md outline-none text-right pr-2 w-[200px]" type="number" placeholder={`${medicine.Tape_Amount}`} />
                       </div>
                       <div className="flex items-center gap-2 p-2 flex-row-reverse">
                            <label className="w-[90px]  text-right flex items-center justify-end text-md" htmlFor="barcode"><FaBarcode /></label>
                            <input className="border-[#999] dark:bg-inherit dark:shadow-md dark:shadow-gray-800 border-1 shadow-md outline-none text-right pr-2 w-[200px]" type="number" placeholder={`${medicine.barcode}`} />
                       </div>
                       <div className="w-[150px]  text-center rounded-sm cursor-pointer py-1 px-3 text-lg ml-auto mt-4 text-white bg-btn-color" > تعديل </div>
                  </div>
                );
              })}
            </div>
          ) : ( null )}
        </div>
        </div>
      </div>
    )
  }
  
  export default EditeMedicene


// {/* <div className="p-2 rounded-tl-lg rounded-tr-lg flex flex-row-reverse justify-between items-center bg-blue-700 dark:bg-black text-white">
//   <p className="w-[250px] text-right"><strong>اسم الدواء</strong></p>
//   <p className="w-[100px] text-right"><strong>سعر الشريط</strong></p>
//   <p className="w-[100px] text-right"><strong> تاريخ الصلاحية </strong></p>
//   <p className="w-[100px] text-right"><strong>الاشرطة المتبقية</strong></p>
//   <p className="w-[100px] text-right"><strong>الكود</strong></p>
// </div> */}


  // <p className="w-[250px] text-right"> <div>  </div> {medicine.Name}</p>
  // <p className="w-[100px] text-right flex items-center justify-end gap-1"> <div className="text-sm text-btn-color">  </div> <div className="text-xl">{medicine.Tape_Price}</div></p>
  // <p className="w-[100px] text-right"> {medicine.Expire} </p>
  // <p className="w-[100px] text-right flex items-center justify-end gap-1"> {medicine.Tape_Amount} </p>
  // <p className="w-[100px] text-right"> {medicine.barcode} </p>