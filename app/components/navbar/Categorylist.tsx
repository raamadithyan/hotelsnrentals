'use client';

import { IconType } from "react-icons/lib";

import qs from 'query-string'
import { useRouter ,useSearchParams} from "next/navigation";
import { useCallback } from "react";

interface CategorieslistProp {
    
    icon:IconType;
    label:string;
    selected:boolean;
    // hrllo:Number;
}
const Categorylist:React.FC<CategorieslistProp> = ({label,icon:Icon,selected}) => {
   const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(
    () => {
      let currentQuery = {}

      if(params){
        currentQuery=qs.parse(params.toString())
      }

      const updatedQuery:any = {
        ...currentQuery,
        category:label
      }

      if(params?.get('category')===label){
        delete updatedQuery.category;
      }

      const url = qs.stringifyUrl({
        url:'/',
        query:updatedQuery
      },
      { 
        skipNull:true
      })

      router.push(url)
    },
    [label,params,router],
  )
  return (
    <div className={`
    flex flex-col items-center cursor-pointer
    text-black px-6
    border-b-2
   hover:text-red-500 transition
    ${selected?'border-b-red-500':'border-transparent'}
    ${selected?'text-red-500':'text-neutral-500'}

  `}>
    <Icon onClick={handleClick} size={24}/>
    <div className="font-small text-sm">{label}</div>
    </div>
  )
}

export default Categorylist