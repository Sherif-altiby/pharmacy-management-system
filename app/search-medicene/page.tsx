"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Loading from "../components/Loading";

import { FaDollarSign } from "react-icons/fa";

import { Medicine } from "../types";

const EditeMedicene = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [inputValues, setInputValues] = useState<number[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetchData();
  };

  const fetchData = async () => {
    try {
      // projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/
      const response = await fetch(`http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/main.php?search=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === "success") {
        setMedicines(result.data);
        setInputValues(result.data.map(() => 1)); // Initialize input values
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
    if (searchTerm.length > 0 || searchTerm === undefined ) {
      fetchData();
    }
  }, [searchTerm]);

 
  return (
    <div>
      <SectionHeader title="البحث عن ادوية" />
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
              id="name"
              placeholder="اسم الدواء"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full">بحث</button>
        </form>
        <div className="mt-5">
          {loading ? (
            <Loading />
          ) : medicines.length > 0 ? (
            <ul className="border-b-2 border-b-emerald-700">
              <li className="p-2 rounded-tl-lg rounded-tr-lg flex flex-row-reverse justify-between items-center bg-blue-700 dark:bg-black text-white">
                <p className="w-[250px] text-right"><strong>اسم الدواء</strong></p>
                <p className="w-[100px] text-right"><strong>سعر الشريط</strong></p>
                <p className="w-[100px] text-right"><strong> تاريخ الصلاحية </strong></p>
                <p className="w-[100px] text-right"><strong>الاشرطة المتبقية</strong></p>
                <p className="w-[100px] text-right"><strong>الكود</strong></p>
              </li>
              {medicines.map((medicine, index) => {
                return (
                  <li key={medicine.id} className={`p-2 flex flex-row-reverse justify-between items-center ${ index % 2 === 0 ? "bg-white dark:bg-gray-500 dark:text-white" : "bg-gray-300 dark:bg-gray-600 dark:text-white"}`}>
                    <p className="w-[250px] text-right"> <div>  </div> {medicine.Name}</p>
                    <p className="w-[100px] text-right flex items-center justify-end gap-1"> <div className="text-sm text-btn-color"> <FaDollarSign /> </div> <div className="text-xl">{medicine.Tape_Price}</div></p>
                    <p className="w-[100px] text-right"> {medicine.Expire} </p>
                    <p className="w-[100px] text-right flex items-center justify-end gap-1"> {medicine.Tape_Amount} </p>
                    <p className="w-[100px] text-right"> {medicine.barcode} </p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-center text-xl bg-title-color text-white rounded-md mt-32 p-2">لا توجد نتائج</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditeMedicene;
