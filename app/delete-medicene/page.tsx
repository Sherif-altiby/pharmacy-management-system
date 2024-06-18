import SectionHeader from "../components/SectionHeader"

const page = () => {
    return (
      <div>
        <SectionHeader title="حذف ادوية" />
         <div data-aos="zoom-in" >
          <form action="" className="flex flex-col w-full md:w-[600px] mx-auto mt-16 bg-card-bg p-3 rounded-md" >
                <div className="flex items-center my-2 w-full flex-row-reverse justify-between " >
                    <label className="w-[90px] md:w-[120px] text-right text-sm md:text-xl" htmlFor="name"> اسم الدواء </label>
                    <input className="border-none outline-none text-sm md:text-xl p-2 text-right flex-grow rounded-md" type="text" id="name" placeholder="اسم الدواء" />
                </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default page