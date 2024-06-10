const EditeMedicene = () => {
    return (
      <div>
        <h1 className="text-center text-3xl bg-gray-500 text-white py-2" > بيع أدوية </h1>
        <div>
          <form action="" className="flex flex-col w-1/2 mx-auto mt-8 bg-red-500 p-3 rounded-md" >
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="name"> اسم الدواء </label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="text" id="name" placeholder="اسم الدواء" />
                </div>
  
               <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                   <label className="w-[120px] text-right text-xl" htmlFor="price"> سعر العلبة </label>
                   <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="price" placeholder="سعر العلبة" />
               </div>
  
                 <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="price"> عدد العلب </label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="price" placeholder="عدد العلب" />
                 </div>

                 <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="sharaet"> عدد الشرائط </label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="sharaet" placeholder="عدد الشرائط" />
                 </div>

                 <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="sharaet-price"> سعر الشريط</label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="number" id="sharaet-price" placeholder="سعر الشريط "/>
                 </div>
  
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="date"> تاريخ اليوم </label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="date" id="date"  />
                </div>

                <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full" > بيع </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default EditeMedicene