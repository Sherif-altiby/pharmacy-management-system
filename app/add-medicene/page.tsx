// AddMedicine.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionHeader from "../components/SectionHeader";
import { FaBarcode } from "react-icons/fa";
import { addMedicenes } from '../utils';
import { Medicine } from '../types';

const AddMedicine = () => {
  const [mediceneName, setMediceneName] = useState('');
  const [mediceneExpire, setMediceneExpire] = useState(new Date().toISOString().split('T')[0]);
  const [mediceneTapePrice, setMediceneTapePrice] = useState(0);
  const [mediceneTapeAmount, setMediceneTapeAmount] = useState(1);
  const [mediceneBarcode, setMediceneBarcode] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMedicine: Medicine = {
      Name: mediceneName,
      barcode: mediceneBarcode,
      id: mediceneBarcode,
      Tape_Amount: mediceneTapeAmount,
      Expire: mediceneExpire,
      Tape_Price: mediceneTapePrice,
      Box_Amount: 1,
    };
    await addMedicenes(newMedicine);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMediceneExpire(e.target.value);
  };

  return (
    <div>
      <SectionHeader title="أضافة أدوية " />
      <div data-aos="zoom-in">
        <form
          className="flex flex-col w-full md:w-[600px] mx-auto mt-5 bg-white dark:bg-transparent dark:shadow-sm dark:shadow-white dark:text-white p-3 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name">اسم الدواء</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
              type="text"
              id="Name"
              placeholder="اسم الدواء"
              value={mediceneName}
              onChange={(e) => setMediceneName(e.target.value)}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Tape_Price">سعر الشريط</label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
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
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
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
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
              type="date"
              id="Expire"
              value={mediceneExpire}
              onChange={handleDateChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right flex items-center justify-end text-xl md:text-6xl" htmlFor="barcode"><FaBarcode /></label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
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
