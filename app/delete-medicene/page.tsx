import SectionHeader from "../components/SectionHeader"

const page = () => {
    return (
      <div>
        <SectionHeader title="حذف ادوية" />
         <div data-aos="zoom-in" >
          <form action="" className="flex flex-col w-full md:w-[600px] mx-auto mt-5 bg-white dark:bg-transparent dark:shadow-sm dark:shadow-white dark:text-white p-3 rounded-md" >
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name"> اسم الدواء </label>
                    <input className="border-[#999] border outline-none text-sm md:text-xl p-2 text-right flex-grow" type="text" id="name" placeholder="اسم الدواء" />
                </div>
                <button className="bg-btn-color text-white text-xl cursor-pointer px-3 py-1 rounded-md font-medium text-md mt-5 w-full"> حذف </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default page