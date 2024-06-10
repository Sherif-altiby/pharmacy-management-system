const page = () => {
    return (
      <div>
        <h1 className="text-center text-3xl bg-gray-500 text-white py-2" > حذف أدوية </h1>
        <div>
          <form action="" className="flex flex-col w-1/2 mx-auto mt-16 bg-red-500 p-3 rounded-md" >
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[120px] text-right text-xl" htmlFor="name"> اسم الدواء </label>
                    <input className="border-none outline-none text-xl p-2 text-right flex-grow rounded-md" type="text" id="name" placeholder="اسم الدواء" />
                </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default page