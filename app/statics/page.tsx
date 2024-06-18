"use client";

import React, { useEffect, useState } from 'react';
import Chart from "../components/Chart";
import Counter from '../components/Counter';

// Define types for sales and medicine data
interface ChartData {
  labels: string[];
  values: number[];
  bgColors: string[];
}

const Loading = () => {
  return  <div className="flex h-screen w-screen items-center justify-center">
  <button type="button" className="flex flex-col items-center rounded-lg  px-4 py-2 text-white" disabled>
    <svg className="mr-3 h-[100px] w-[100px] animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <div className="font-medium text-black "> Loading..... </div>
  </button>
</div>
}

const Page = () => {
  const [salesData, setSalesData] = useState<ChartData | null>(null);
  const [medicinesData, setMedicinesData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
     //Ali paht:
      // projects/pharmacymanagementsystem/pharmacy-management-system/Back_end/
      // fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end//main.php?statistics=true')

    fetch('http://localhost/projects/pharmacymanagementsystem/pharmacy-management-system/Back_end//main.php?statistics=true')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 'success') {
          setSalesData(data.data.sales);
          setMedicinesData(data.data.medicines);
        } else {
          setError(data.message);
        }
      })
      .catch(error => setError('Error fetching data: ' + error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading /> ;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!salesData || !medicinesData) {
    return <div>No data available</div>;
  }

  return (
    <div className="pb-14">
      <div className="flex gap-4 flex-col xl:flex-row justify-between items-center" >
        <div className="w-full xl:w-[500px] bg-white dark:bg-black dark:text-white rounded-md p-3" data-aos="fade-right" >
          <Chart title=" كشف المبيعات الاشهر" dataValue={salesData.values} labelsVlue={salesData.labels} bgColors={salesData.bgColors} borderColor={salesData.bgColors}/>
        </div>
        <div className="w-full xl:w-[500px] bg-white dark:bg-black dark:text-white rounded-md p-3" data-aos="fade-left" >
          <Chart title="الادوية الاكثر مبيعا" dataValue={medicinesData.values} labelsVlue={medicinesData.labels} bgColors={medicinesData.bgColors} borderColor={medicinesData.bgColors}/>
        </div>
      </div>

      <div className='flex items-center justify-between flex-wrap' >
 
           <div className='w-[200px] h-[200px] rounded-md  bg-white p-12 flex items-center justify-center text-3xl font-semibold mt-14 dark:bg-black dark:text-white ' >
               <Counter />
           </div>
     
           <div className='w-[200px] h-[200px] rounded-md  bg-white p-12 flex items-center justify-center text-3xl font-semibold mt-14 dark:bg-black dark:text-white ' >
               <Counter />
           </div>
     
           <div className='w-[200px] h-[200px] rounded-md  bg-white p-12 flex items-center justify-center text-3xl font-semibold mt-14 dark:bg-black dark:text-white ' >
               <Counter />
           </div>

      </div>

    </div>
  );
}

export default Page;
