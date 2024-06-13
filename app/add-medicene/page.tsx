'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionHeader from "../components/SectionHeader";
import { FaBarcode } from "react-icons/fa";

const AddMedicine: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    Box_Amount: '',
    Tape_Amount: '',
    Tape_Price: '',
    Expire: '',
    barcode: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/main.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === 'success') {
        alert('Medicine added successfully');
      } else {
        alert('Failed to add medicine: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <SectionHeader title="أضافة أدوية " />
      <div>
        <form 
          className="flex flex-col w-full md:w-[600px] mx-auto mt-16 bg-card-bg p-3 rounded-md" 
          onSubmit={handleSubmit}
        >
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name">اسم الدواء</label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="text"
              id="name"
              placeholder="اسم الدواء"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Box_Amount">سعر العلبة</label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="number"
              id="Box_Amount"
              placeholder="سعر العلبة"
              value={formData.Box_Amount}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Tape_Amount">عدد العلب</label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="number"
              id="Tape_Amount"
              placeholder="عدد العلب"
              value={formData.Tape_Amount}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Tape_Price">تاريخ الصلاحية</label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="number"
              id="Tape_Price"
              placeholder="تاريخ الصلاحية"
              value={formData.Tape_Price}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="Expire">تاريخ الصلاحية</label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="date"
              id="Expire"
              placeholder="عدد العلب"
              value={formData.Expire}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[90px] md:w-[120px] text-right flex items-center justify-end text-xl md:text-6xl" htmlFor="barcode"><FaBarcode /></label>
            <input
              className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md"
              type="number"
              id="barcode"
              placeholder="الكود"
              value={formData.barcode}
              onChange={handleChange}
            />
          </div>

          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">حفظ</button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
