"use client";

import React, { useEffect, useState } from 'react';
import Chart from "../components/Chart";
import Counter from '../components/Counter';
import Loading from '../components/Loading';

// Define types for sales and medicine data
interface ChartData {
  labels: string[];
  values: number[];
  bgColors: string[];
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

    fetch('http://localhost/pharmasy/back_end/main.php?statistics=true')
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
    return <>
         <div className='loading-statics flex items-center justify-center' >
            <Loading />
         </div>
    </> ;
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
               <Counter />
      </div>

    </div>
  );
}

export default Page;
