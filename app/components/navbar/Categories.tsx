'use client';

import Categorylist from "./Categorylist";

import Ahmedabad from '/png/ahmedabad.png'
import Bangalore from '/png/bangalore.png'
import Chandigarh from '/png/chandigarh.png'
import Chennai from '/png/chennai.png'
import Delhi from '/png/delhi.png'
import Kochi from '/png/kochi.png'
import Kolkata from '/png/kolkata.png'
import Mumbai from '/png/mumbai.png'
import Pune from '/png/pune.png'
import Hyderabad from '/png/hyderbad.png'






import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';


import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
    {
      label: 'Ahmedabad',
      
      description: 'This property is close to the beach!',
      city:Ahmedabad
    },
    {
      label: 'Bangalore',
      
      description: 'This property is has windmills!',
      city:Bangalore

    },
    {
      label: 'Chandigarh',
      
      description: 'This property is modern!',
      city:Chandigarh

    },
    {
      label: 'Chennai',
      description: 'This property is in the countryside!',
      city:Chennai

    },
    {
      label: 'Delhi',
      description: 'This is property has a beautiful pool!',
      city:Delhi

    },
    {
      label: 'Kochi',
      description: 'This property is on an island!',
      city:Kochi

    },
    {
      label: 'Kolkata',
      description: 'This property is near a lake!',
      city:Kolkata

    },
    {
      label: 'Mumbai',
      description: 'This property is near a lake!',

      city:Mumbai

    },
    {
      label: 'Pune',
      description: 'This property is an ancient castle!',
      city:Pune


    },
    {
      label: 'Hyderabad',
      description: 'This property is in a spooky cave!',
      city:Hyderabad

    },
   
  ]
  




const Categories=()=> {

const params = useSearchParams()
const pathname = usePathname()

const category = params?.get('category');

const isMainPAge = pathname ==='/';

if(!isMainPAge){
  return null;
}
 
// console.log(category)


  return (
    <Container>
        <div className="pt-4 flex flex-row xl:mx-40 
        items-center justify-between overflow-x-auto ">
            {categories.map((cat)=>(
            <Categorylist selected={category===cat.label} key={cat.label}  label={cat.label} city={cat.city} />
            )
            )}
      

        </div>

    </Container>
  ) 
}

export default Categories


