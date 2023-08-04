'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

function Logo() {

const router = useRouter()

  return (
    <>
      <div onClick={()=>router.push('/')} >
        < Image alt="Logo" src="/images/logo.png" priority width="70" height="70" style={{ width: 'auto', height: 'auto' }}
          className=" ml-4 md:ml-8 lg:ml-16 cursor-pointer" />
      </div>

    </>
  )
}

export default Logo