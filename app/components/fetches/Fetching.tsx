interface FetchProps {
	isOpen?:boolean;

}

const url =
  'https://airbnb13.p.rapidapi.com/search-location?location=Delhi&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=4&currency=USD';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd86894edc4msh629ee0c98e8c983p1fda9bjsn154dcafda454',
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
  },
};


const Fetching:React.FC<FetchProps> = async  ({isOpen}) => {

// async function Fetching({isOpen}:{isOpen:boolean;}){

	const res = await fetch(url,options)
	      const data = await res.json();
	            const result = data.results;
	            // console.log(result)



	return (
		<>
		<div className="flex flex-wrap">
			{result && result.map((res)=>(
				<div className=""  key={res.id}>
				<img width="500" src={res.images[0]}/>
					
				</div>
				))}
				
		</div>

		

		</>
	)
}

export default Fetching