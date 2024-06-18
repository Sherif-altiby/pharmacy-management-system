"use client";

interface Medicine {
  id: number;
  Name: string;
  Box_Amount: number;
  Tape_Amount: number;
  Tape_Price: number;
  Expire: string;
  barcode: string;
}

import React, { useState, ChangeEvent, FormEvent } from "react";
import SectionHeader from "../components/SectionHeader";
import Loading from "../components/Loading";

const SearchMedicine: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      //Ali paht:
      // projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/
      // Sherif Path: http://localhost/pharmasy/back_end/main.php

      const response = await fetch(`http://localhost/pharmasy/back_end/main.php?search=${encodeURIComponent(searchTerm)}`);


      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === "success") {
        console.log(result.data);
        if (result.data.length > 0) {
          const firstElement = result.data;
          console.log(firstElement); // Log the first element
        }
        setMedicines(result.data);
        setLoading(false);
      } else {
        throw new Error("Failed to retrieve medicines: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch data. Please try again later.");
    }
  };

  return (
    <div>
      <SectionHeader title="البحث عن ادوية" />
      <div data-aos="zoom-in">
        <form
          className="flex flex-col w-full md:w-[600px] mx-auto mt-5 bg-white dark:bg-transparent dark:shadow-sm dark:shadow-white dark:text-white p-3 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center my-2 w-full flex-row-reverse justify-between">
            <label
              className="w-[90px] md:w-[120px] text-right text-sm md:text-xl dark:text-white"
              htmlFor="name"
            >
              اسم الدواء
            </label>
            <input
              className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow"
              type="text"
              id="name"
              placeholder="اسم الدواء"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">
            بحث
          </button>
        </form>
        <div className="mt-5">
          {loading ? (
            <Loading />
          ) : medicines.length > 0 ? (
            <ul className="border-b-2 border-b-emerald-700" >
              <li className="p-2 rounded-tl-lg rounded-tr-lg flex flex-row-reverse justify-between items-center bg-emerald-700  text-white"  >
                  <p className="w-[250px] text-right"> <strong>اسم الدواء</strong>  </p>
                  <p className="w-[100px] text-right"> <strong>سعر العلبة</strong>  </p>
                  <p className="w-[100px] text-right"> <strong>عدد العلب</strong>  </p>
                  <p className="w-[200px] text-right"> <strong>تاريخ الصلاحية</strong>  </p>
                  <p className="w-[70px]  text-right "> <strong>الكود</strong>  </p>
              </li>
              {medicines.map((medicine, index) => (
                <li key={medicine.id} className={`p-2 flex flex-row-reverse  justify-between items-center  ${index % 2 === 0 ? 'bg-white dark:bg-black dark:text-white ' : 'bg-gray-300'} `} >
                  <p className="w-[250px] text-right ">  {medicine.Name} </p>
                  <p className="w-[100px] text-right ">  {medicine.Box_Amount} </p>
                  <p className="w-[100px] text-right ">  {medicine.Tape_Amount} </p>
                  <p className="w-[200px] text-right ">  {medicine.Expire} </p>
                  <p className="w-[70px]  text-right  ">  {medicine.barcode} </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-xl bg-title-color text-white rounded-md mt-32 p-2">
              لا توجد نتائج
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchMedicine;
