import Chart from  "../components/Chart";
import DoughnutChart from "../components/DoughnutChart";
import LineCart from "../components/LineCart";
import PieChart from "../components/PieChart";

const sallesLables = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر']
const sallesValues = [659, 559, 840, 681, 56, 55, 140, 100, 200, 300, 320, 12];
const sallesBgColors = [ 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(205, 216, 816, 0.2)', 'rgba(255, 256, 86, 0.2)', 'rgba(255, 206, 816, 0.2)', 'rgba(25, 206, 86, 0.2)', 'rgba(255, 26, 86, 0.2)']

const mediceneLables = ['m1', 'm2', 'm3', 'm4', 'm5'];
const mediceneValues = [1000, 2000, 3000, 4000, 5000]
const mediceneBgColors = [ 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', ]

const page = () => {
  return (
   <div className="pb-14">
          <div className="flex gap-4 flex-col xl:flex-row justify-between items-center " >
                 <div className=" w-full xl:w-[500px] bg-white rounded-md p-3 " > <Chart title="كشف المبيعات" dataValue={sallesValues} labelsVlue={sallesLables} bgColors={sallesBgColors} borderColor={sallesBgColors}/> </div>
                 <div className=" w-full xl:w-[500px] bg-white rounded-md p-3 " > <Chart title="الادوية الاكثر مبيعا" dataValue={mediceneValues} labelsVlue={mediceneLables} bgColors={mediceneBgColors} borderColor={mediceneBgColors} /> </div>
         </div>

         <div className="mt-10" >
                <div> <LineCart /> </div>
         </div>
         
         <div className="flex gap-4 flex-col xl:flex-row justify-between items-center mt-10 " >
             <div className="w-full xl:w-[500px] bg-white rounded-md p-3" >  <PieChart /> </div>
             <div className="w-full xl:w-[500px] bg-white rounded-md p-3" >  <DoughnutChart /> </div>
         </div>
   </div>
  )
}

export default page