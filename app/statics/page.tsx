import Chart from  "../components/Chart";


const page = () => {
  return (
    <div className="flex gap-4 flex-col xl:flex-row justify-between items-center " >
      <div className=" w-full xl:w-[500px]" > <Chart title="كشف المبيعات" dataValue={[659, 559, 840, 681, 56, 55, 140, 100, 200, 300, 320, 12]} labelsVlue={['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر']} /> </div>
      <div className=" w-full xl:w-[500px]" > <Chart title="الادوية الاكثر مبيعا" dataValue={[1000, 2000, 3000, 4000, 5000]} labelsVlue={['m1', 'm2', 'm3', 'm4', '5']} /> </div>
    </div>
  )
}

export default page