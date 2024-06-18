'use client';

interface Medicine {
  id: number;
  Name: string;
  Box_Amount: number;
  Tape_Amount: number;
  Tape_Price: number;
  Expire: string;
  barcode: string;
}

import React, { useState, ChangeEvent, FormEvent } from 'react';
import SectionHeader from "../components/SectionHeader";

const SearchMedicine: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost/pharmasy/Back_end/main.php?search=${encodeURIComponent(searchTerm)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      if (result.status === 'success') {
        console.log(result.data)
        if (result.data.length > 0) {
          const firstElement = result.data;
          console.log(firstElement); // Log the first element
        
        }
        setMedicines(result.data);
      } else {
        throw new Error('Failed to retrieve medicines: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <div>
      <SectionHeader title="البحث عن ادوية" />
      <div data-aos="zoom-in" >
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
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">بحث</button>
        </form>
        <div className="mt-5">
          {medicines.length > 0 ? (
            <ul>
              {medicines.map((medicine) => (
                <li key={medicine.id} className="p-2 rounded-lg flex flex-row-reverse flex-wrap justify-between items-center bg-card-bg my-4 text-white">
                  <p className='w-[250px] text-right my-1' ><strong>اسم الدواء:</strong> {medicine.Name}</p>
                  <p className='w-[100px] text-right my-1' ><strong>سعر العلبة:</strong> {medicine.Box_Amount}</p>
                  <p className='w-[100px] text-right my-1' ><strong>عدد العلب:</strong> {medicine.Tape_Amount}</p>
                  <p className='w-[200px] text-right my-1' ><strong>تاريخ الصلاحية:</strong> {medicine.Expire}</p>
                  <p className='w-[70px]  text-right my-1' ><strong>الكود:</strong> {medicine.barcode}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-center text-xl bg-title-color text-white rounded-md mt-32 p-2' >لا توجد نتائج</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchMedicine;
