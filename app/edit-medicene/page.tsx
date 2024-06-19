"use client"

import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { FaBarcode } from "react-icons/fa";
import { Medicine } from "../types";
import Loading from "../components/Loading";


const EditeMedicene = () => {


  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [mediceneMenu, setMediceneMenu] = useState(false);
  const [mediceneExpire, setMedicenExpire] = useState('');
  const [mediceneTrapePrice, setMediceneTrapePrice] = useState(1);
  const [mediceneTrapeCount, setMediceneTrapeCount] = useState(1);
  const [medicenBarcode, setMediceneBarCode] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetchData();
  };

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`http://localhost/pharmasy/Back_end/main.php?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === "success") {
        setMedicines(result.data);
      } else {
        throw new Error("Failed to retrieve medicines: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    if (searchTerm.length > 0 ){ 
        fetchData();
        setMediceneMenu(true)
      } else {
         setMediceneMenu(false)
       }
      }, [searchTerm]);

  const handleClick = ( {Name, Expire, Tape_Amount, Tape_Price, barcode}: Medicine ) => {
    setSearchTerm(Name)
    setMedicenExpire(Expire)
    setMediceneTrapePrice(Tape_Price)
    setMediceneTrapeCount(Tape_Amount)
    setMediceneBarCode(barcode)
  }

  const MedicenesMenu = () => {
    return (
      <div>
        {
        loading ? <div className="mt-[150px]" >  <Loading /> </div> :
        
        medicines.map(({ id, Name, Expire, Tape_Amount, Tape_Price, barcode, Box_Amount }: Medicine, index) => (
          <p
            key={id}
            className={`text-center text-xl p-2 cursor-pointer ${index % 2 === 0 ? 'bg-gray-500' : 'bg-white'}`}
            onClick={() => handleClick({ Name, Expire, Tape_Amount, Tape_Price, barcode, id, Box_Amount })}
          >
            {Name}
          </p>
        ))}
      </div>
    );
  };

    return (
      <div>
        <SectionHeader title="تعديل ادوية" />
        <div data-aos="zoom-in" className="relative"  >
          <div className={`absolute w-[250px] h-[400px] overflow-y-auto rounded-sm shadow-md ${mediceneMenu ? 'block' : 'hidden'} `} > <MedicenesMenu /> </div>
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
  
               <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                   <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="price"> سعر الشريط </label>
                   <input 
                      className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" 
                      type="number" 
                      id="price" 
                      placeholder="سعر الشريط" 
                      value={mediceneTrapePrice}
                      />
               </div>
  
                 <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="price"> عدد الاشرطة </label>
                    <input 
                       className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" 
                       type="number" 
                       id="price" 
                       placeholder="عدد الاشرطة" 
                       value={mediceneTrapeCount}
                       />
                 </div>
  
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="date"> تاريخ الصلاحية </label>
                    <input 
                       className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" 
                       type="date" 
                       id="date" 
                       placeholder="عدد العلب" 
                       value={mediceneExpire}
                       />
                </div>

                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                   <label className="w-[90px] md:w-[120px] text-right flex items-center justify-end text-xl md:text-6xl" htmlFor="barcode"><FaBarcode /></label>
                   <input 
                      className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" 
                      type="number" 
                      id="code" 
                      placeholder="الكود" 
                      value={medicenBarcode}
                      />
                </div>

                <div className="flex items-center justify-between gap-3" >
                   <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full" > تعديل </button>
                   <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full" > حذف </button>
                </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default EditeMedicene