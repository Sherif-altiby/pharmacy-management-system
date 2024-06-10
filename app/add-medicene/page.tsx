"use client";  // Add this directive at the top

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  price: string;
  quantity: string;
  expiry_date: string;
}

const AddMedicine: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    price: '',
    quantity: '',
    expiry_date: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    
    const response = await fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/main.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === 'success') {
      alert('Medicine added successfully');
    } else {
      alert('Error adding medicine');
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl bg-gray-500 text-white py-2">أضافة أدوية</h1>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto mt-16 bg-red-500 p-3 rounded-md">
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[120px] text-right text-xl" htmlFor="name">اسم الدواء</label>
            <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="text" id="name" placeholder="اسم الدواء" value={formData.name} onChange={handleChange} />
          </div>
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[120px] text-right text-xl" htmlFor="price">سعر العلبة</label>
            <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="price" placeholder="سعر العلبة" value={formData.price} onChange={handleChange} />
          </div>
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[120px] text-right text-xl" htmlFor="quantity">عدد العلب</label>
            <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="quantity" placeholder="عدد العلب" value={formData.quantity} onChange={handleChange} />
          </div>
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label className="w-[120px] text-right text-xl" htmlFor="expiry_date">تاريخ الصلاحية</label>
            <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="date" id="expiry_date" placeholder="تاريخ الصلاحية" value={formData.expiry_date} onChange={handleChange} />
          </div>
          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">حفظ</button>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
