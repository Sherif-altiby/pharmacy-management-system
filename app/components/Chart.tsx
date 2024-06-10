"use client"

import { ChartProps } from '../types';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const Chart = ( {title, labelsVlue, dataValue}: ChartProps ) => {
 
  const data = {
    labels: labelsVlue,
    datasets: [
      {
        label: 'الاحصائيات',
        data: dataValue,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', 
      },
      title: {
        display: true,
        text: '',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2 className='text-3xl text-center my-3' > {title} </h2>
      <Bar data={data} options={options} className='bg-black h-[400px]' />
    </div>
  );
};

export default Chart;
