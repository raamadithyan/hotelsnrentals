'use client';

import { useState, useEffect, useRef,useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import Menuitem from './Menuitem';
import useRegisterModal from '@/app/hooks/useRegisterModel';

 import useRentModal from '@/app/hooks/useRentModal';


function Login() {
const store= useRegisterModal()
const rentModal = useRentModal()

const onRent = useCallback(()=>{

  rentModal.onOpen()


},[rentModal])

  const [loginOpen, setloginOpen] = useState(false);
  const ref = useRef()
  function handleloginOpen() {
    setloginOpen((value) => !value)
  }

  // useEffect(()=>{
  //   const checkIfClickedOutside = e => {
  //     // If the menu is open and the clicked target is not within the menu,
  //     // then close the menu
  //     if (isOpen && ref.current && !ref.current.contains(e.target)) {
  //       setIsOpen(false)
  //     }
  //   }

  //   document.addEventListener("click", checkIfClickedOutside)

  //   return (() => (
  //     // Cleanup the event listener
  //     document.removeEventListener("click", checkIfClickedOutside))

  // )},[isOpen])

  

  return (

    <div ref={ref} className="relative  mr-4 md:mr-16">
      <div className="flex flex-row items-center ">
        <div
          onClick={onRent}
          className="hidden sm:block text-sm font-semibold
         py-3 px-4 rounded-full transition cursor-pointer text-red-500
          hover:shadow-md"
        >
          Explore Rentels
        </div>
        <div onClick={handleloginOpen}
          className="p-4 md:py-1 md:px-2 border=[1px] text-red-500
        border-neutral-200 flex flex-row items-center
          gap-3 rounded-full cursor-pointer hover:shadow-md
           transition
        "
        >
          <AiOutlineMenu />
          <RxAvatar size={30} className='text-red-500' />
          {loginOpen &&
            <div className='absolute top-12 right-0 w-32 h-fit bg-white shadow-md'>
              <div className="flex flex-col justify-center cursor-pointer">
                <Menuitem onClick={store.onOpen} label={'Login'} />
                <Menuitem onClick={store.onOpen} label={'Signup'} />
              </div>

            </div>
          }
        </div>

      </div>

    </div>
  )
}

export default Login