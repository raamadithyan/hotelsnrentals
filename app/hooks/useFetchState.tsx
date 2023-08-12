 
import {create} from 'zustand';




interface FetchStateStore {
    isFetch?:boolean;
    onFetch:()=>void;

}   

const useFetchState=create<FetchStateStore>((set)=>({
isFetch:false,
onFetch:()=> set((state) => ({ isFetch: !state.isFetch})),

}))

export default useFetchState