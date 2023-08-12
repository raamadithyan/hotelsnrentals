"use client"
import useFetchState from "@/app/hooks/useFetchState";


const FetchedComponent = ({img}) => {
  const fetch = useFetchState()

	return ( fetch.isFetch && 
		(<div className=" flex w-[300px] h-[200px] mb-20 
		  "  >
				<img width="400" className="object-cover" src={img} />
					
				</div> 
	))
}

export default FetchedComponent