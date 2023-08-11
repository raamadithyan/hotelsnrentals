
import {Roboto} from 'next/font/google';
 import useFetchState from './hooks/useFetchState';
 import Fetching from './components/fetches/Fetching';

export default function Home() {

// const fetch =  useFetchState()
  return (
    <main className="-z-10 absolute  top-[30%]  border-2 border-red-500 w-[100vw] ">
    <div className=' border-2 border-red-500'>
    <Fetching isOpen={useFetchState.getState().isFetch} />
    
   
    
    </div> 
    
    
    </main> 
  )
}
