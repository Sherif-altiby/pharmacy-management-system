"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Loading from "../components/Loading";

import { FaCheck } from "react-icons/fa6";

import { Medicine } from "../types";
import { fetchMedicinesData } from "../utils";
import Warning from "../components/Warning";

const EditeMedicene = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [inputValues, setInputValues] = useState<number[]>([]);

  const [warningText, setWarningText] = useState("");
  const [warningShow, setWarningShow] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetchData();
  };

  const fetchData = async () => {
    setLoading(true);
    if (searchTerm.length > 0 && searchTerm !== "") {
      const data = await fetchMedicinesData({ searchTerm });
      setMedicines(data.data);
      setInputValues(data.data.map(() => 0));  
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0 || searchTerm === undefined) {
      fetchData();
    }
  }, [searchTerm]);

  const handleInputChange = (index: number, value: string, price: number) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] =  Number(value); 
    setInputValues(updatedInputValues);
     console.log(price)
    if(updatedInputValues[index] > price){
       setWarningShow(true);
       setWarningText("للاسف عدد الاشرطة لا يكفي")
    }else {
      setWarningShow(false)
    }

  };

  const handleIncrement = (index: number) => {
    const updatedInputValues = [...inputValues];
    if (updatedInputValues[index] < medicines[index].Tape_Amount) {
      updatedInputValues[index] += 1;
      setInputValues(updatedInputValues);
    }
  };

  const handleDecrement = (index: number) => {
    const updatedInputValues = [...inputValues];
    if (updatedInputValues[index] > 1) {
      updatedInputValues[index] -= 1;
      setInputValues(updatedInputValues);
    }
  };

  return (
    <div className="relative" >
      <Warning title={warningText} show={warningShow} closeWarning={() => setWarningShow(false)}/>
      <SectionHeader title="بيع ادوية" />
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
                <p className="w-[100px] text-right"><strong>عدد الاشرطة</strong></p>
                <p className="w-[100px] text-right"><strong>الاشرطة المتبقية</strong></p>
                <p className="w-[100px] text-right"><strong>المجموع</strong></p>
                <p className="w-[70px] text-right"><strong></strong></p>
              </li>
              {medicines.map((medicine, index) => {
                const isIncrementDisabled = inputValues[index] >= medicine.Tape_Amount;

                return (
                  <li
                    key={medicine.id}
                    className={`p-2 flex flex-row-reverse justify-between items-center ${
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-500 dark:text-white"
                        : "bg-gray-300 dark:bg-gray-600 dark:text-white"
                    }`}
                  >
                    <p className="w-[250px] text-right">{medicine.Name}</p>
                    <p className="w-[100px] text-right flex items-center justify-between gap-1">
                      <div className="text-sm text-btn-color relative w-8 h-8 ">
                       </div>
                      <div className="text-xl">{medicine.Tape_Price}</div>
                    </p>
                    <p className="w-[100px] text-right flex items-center justify-center remove-arrow gap-1">
                      <button
                        className="bg-btn-color rounded-sm text-white px-2 focus:scale-95 duration-200"
                        onClick={() => handleDecrement(index)}
                        disabled={inputValues[index] <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="w-[60px] border border-[#0c0c0c] outline-none text-center text-black"
                        min={1}
                        value={inputValues[index]}
                        onChange={(e) => handleInputChange(index, e.target.value, medicine.Tape_Amount)}
                      />
                      <button
                        className="bg-btn-color rounded-sm text-white px-2 focus:scale-95 duration-200"
                        onClick={() => handleIncrement(index)}
                        disabled={isIncrementDisabled}
                      >
                        +
                      </button>
                    </p>
                    <p className="w-[100px] text-right">
                      {medicine.Tape_Amount - inputValues[index] <= 0
                        ? 0
                        : medicine.Tape_Amount - inputValues[index]}
                    </p>
                    <p className="w-[100px] text-right flex items-center justify-between gap-1">
                      <div className="text-sm text-btn-color relative w-8 h-8 ">
                      </div>
                      <div className="text-xl">
                        {inputValues[index] * medicine.Tape_Price}
                      </div>
                    </p>
                    <p className="w-[70px] text-right">
                      <div className="bg-btn-color text-white text-3xl cursor-pointer p-1 font-semibold flex items-center justify-center rounded-md hover:scale-95 duration-0">
                        <FaCheck />
                      </div>
                    </p>
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
