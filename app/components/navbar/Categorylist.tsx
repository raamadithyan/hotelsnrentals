'use client';


import Image from 'next/image'
import qs from 'query-string'
import { useRouter ,useSearchParams} from "next/navigation";
import { useCallback } from "react";
import { StaticImageData } from "next/image";
import useFetchState from '@/app/hooks/useFetchState';

interface CategorieslistProp {
    
    label:string;
    selected:boolean;
    city:StaticImageData;
    // hrllo:Number;
}
const Categorylist:React.FC<CategorieslistProp> = ({label,selected,city}) => {
   const router = useRouter();
  const params = useSearchParams();
  const fetch = useFetchState()


  const handleClick = useCallback(
    () => {
      // let currentQuery = {}

      // if(params){
      //   currentQuery=qs.parse(params.toString())
      // }

      // const updatedQuery:any = {
      //   ...currentQuery,
      //   category:label
      // }

      // if(params?.get('category')===label){
      //   delete updatedQuery.category;
      // }

      // const url = qs.stringifyUrl({
      //   url:'/',
      //   query:updatedQuery
      // },
      // { 
      //   skipNull:true
      // })

      // router.push(url)
      console.log(fetch.onFetch())
      // fetch.isFetch
    },
    [],
  )
  return (
    <div onClick={()=>{fetch.onFetch()}} className={`
    flex flex-col items-center cursor-pointer
    text- px-6 pb-1 md:pb-2 
  
   hover:text-red-500 transition
    ${selected?'border-b-red-500':'border-transparent'}
    ${selected?'text-red-500':'text-neutral-500'}

  `}>
    
    <Image onClick={()=>{}} className='
    w-8 

    filter
    md:w-12 
    lg:w-12 
    xl:16  '
      src={city}
      // width={50}
      
      alt=""
    />
    <div className="font-semibold text-sm">{label}</div>
    </div>
  )
}

export default Categorylist