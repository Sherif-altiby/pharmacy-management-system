'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionHeader from "../components/SectionHeader";
import { FaBarcode } from "react-icons/fa";
import { addMedicenes } from '../utils';
import { Medicine } from '../types';

const AddMedicine: React.FC = () => {
 
  const [mediceneName, setMediceneName] = useState('');
  const [mediceneExpire, setMediceneExpire] = useState(new Date());
  const [mediceneTapePrice, setMediceneTapePrice] = useState(0);
  const [mediceneTapeAmount, setMediceneTapeAmount] = useState(1);
  const [mediceneBarcode, setMediceneBarcode] = useState(0);

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault()

     const newMedicine: Medicine = {
      Name: mediceneName,
      barcode:mediceneBarcode,
      id: mediceneBarcode,
      Tape_Amount: mediceneTapeAmount,
      Expire: mediceneExpire.toISOString().split('T')[0],
      Tape_Price: mediceneTapePrice,
      Box_Amount: 1,
     }

     await addMedicenes( newMedicine );
 }

 const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setMediceneExpire(new Date(e.target.value));
};

  return (
    <div>
      <SectionHeader title="أضافة أدوية " />
      <div data-aos="zoom-in" >
        <form 
          className="flex flex-col w-full md:w-[600px] mx-auto mt-5 bg-white dark:bg-transparent dark:shadow-sm dark:shadow-white dark:text-white p-3 rounded-md" 
          onSubmit={handleSubmit}
        >
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name">اسم الدواء</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow "
              type="text"
              id="name"
              placeholder="اسم الدواء"
              value={mediceneName}
              onChange={(e) => setMediceneName(e.target.value)}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Box_Amount">سعر الشريط</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow "
              type="number"
              id="Tape_Price"
              placeholder="سعر الشريط"
              value={mediceneTapePrice}
              onChange={(e) => setMediceneTapePrice(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Tape_Amount">عدد الاشرطة</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow "
              type="number"
              id="Tape_Amount"
              placeholder="عدد الاشرطة"
              value={mediceneTapeAmount}
              onChange={(e) => setMediceneTapeAmount(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Expire">تاريخ الصلاحية</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow "
              type="date"
              id="Expire"
              value={mediceneExpire.toISOString().split('T')[0]}
              onChange={handleDateChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right flex items-center justify-end text-xl md:text-6xl" htmlFor="barcode"><FaBarcode /></label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow "
              type="number"
              id="barcode"
              placeholder="الكود"
              value={mediceneBarcode}
              onChange={(e) => setMediceneBarcode(Number(e.target.value))}
            />
          </div>

          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">حفظ</button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;




 // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //       //Ali paht:
  //     // projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/
  //     // const response = await fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/main.php', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json'
  //     //   },
  //     //   body: JSON.stringify(formData)
  //     // });
  //     const response = await fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/main.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     if (result.status === 'success') {
  //       alert('Medicine added successfully');
  //     } else {
  //       alert('  في مشكله : ' + result.message);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred');
  //   }
  // };


   // const [formData, setFormData] = useState({
  //   Name: '',
  //   Box_Amount: '',
  //   Tape_Amount: '',
  //   Tape_Price: '',
  //   Expire: '',
  //   barcode: '',
  //   id: ''
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     id: value
  //   });
  // };