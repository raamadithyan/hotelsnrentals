import { StaticImageData } from "next/image";
import Image  from "next/image";

import './png.css'

interface CategoryinputProps {
	selected?:Boolean;
	label?:string;
	city?:StaticImageData;
	onClick?:(value:string)=>void;
}

const Categoryinput:React.FC<CategoryinputProps> = (
{city,label,selected,onClick}) => { 
	return ( 
		<div className=" border-2
 rounded-xl p-2 md:px-4 flex flex-col items-center group hover:border-red-500 
 cursor-pointer 
 ">
 <Image className="w-12 
md:w-16" src={city} alt=""/> 
<div className="group-hover:text-red-500">{label}</div>
			
		</div> 
	)
}

export default Categoryinput

// filter: invert(40%) sepia(67%) saturate(2660%) hue-rotate(337deg) brightness(98%) contrast(90%);