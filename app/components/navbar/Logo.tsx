'use client';

import Image from "next/image";
import { useRouter } from "next/router";

function Logo() {



  return (
    <>
      <div>
        < Image alt="Logo" src="/images/logo.png" width={100} height={100}
          className="w-auto h-auto ml-4 md:ml-8 lg:ml-16" priority ={true} />
      </div>

    </>
  )
}

export default Logo