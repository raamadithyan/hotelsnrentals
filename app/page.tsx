
import {Roboto} from 'next/font/google';
 import Fetching from './components/fetches/Fetching';

export default function Home() {

  return (
    <main className=" fetchclass -z-10 absolute  top-[30%] w-[100vw]  
               ">
    <div className='  mx-12 
     '>
    <Fetching  />
    
    
    </div> 
      
    
    </main> 
  )
}
