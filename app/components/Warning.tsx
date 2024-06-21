import { WarningProps } from "../types"

const Warning = ( {show, title, closeWarning}: WarningProps ) => {
  return (
    <div className={` flex absolute p-3  gap-3 min-w-[250px] text-white bg-red-600 justify-between rounded-md top-[-200px] left-1/2 translate-x-[-50%] z-50 ${show ? 'top-[120px]' : 'top-[-200px]'} duration-500 `} >
        <h2 className="font-bold text-md" > {title} </h2>
        <div className="bg-red-800 py-1 px-3 text-sm rounded-sm cursor-pointer" onClick={closeWarning} > X </div>
    </div>
  )
}

export default Warning