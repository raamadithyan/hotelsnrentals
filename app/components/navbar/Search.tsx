'use client';

import { BiSearch } from 'react-icons/bi'

function Search() {
  return (
    <div className="border-[1px] border-red-500  hidden  py-1 px-2 rounded-full shadow-sm hover:shadow-md cursor-pointer
    focus:bg-red-200 md:py-2 md:w-auto md:block  ">
      <div className="flex flex-row items-center justify-end   ">
        <div className=" hidden text-sm text-red-500 font-semibold pr-6 pl-3 md:block ">
          Changeover 
        </div>

        <div className="hidden  text-sm text-red-500 font-semibold px-6  border-x-[1px] border-red-400 md:block">Any Week</div>
        <div className="hidden  text-sm text-red-400 font-semibold pl-3 pr-6  md:block ">Any Week</div>
        <div className="">
          <div className="p-1 md:p-2 bg-rose-500 rounded-full text-white mr-1">
            <BiSearch size={18} />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Search