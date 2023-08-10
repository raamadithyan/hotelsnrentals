interface FetchProps {
	isOpen?:boolean;

}


const Fetching:React.FC<FetchProps> = async  ({isOpen}) => {

	const data = await fetch("")
	return (
		<div>

		Fetching data ...

		</div>
	)
}

export default Fetching