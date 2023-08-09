'use client';

import Heading from "../heading/Heading";
import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import { categories } from "../navbar/Categories";
 import Categoryinput from "../input/Categoryinput";

enum STEPS  {
CATEGORY=0,
LOCATION=1,
INFO=2,
IMAGES =3,
DESCRIPTION=4,
PRICE=5,

}



const RentModal = () => {
	const rent = useRentModal()

	const [steps,setSteps]=useState(STEPS.CATEGORY)

	const onNext = ()=>{
		setSteps(value=>value+1)
	}

	const onBack = ()=>{
		setSteps(value=>value-1)
	}

	const actionLabel = useMemo(()=>{
		if(steps===STEPS.PRICE){
			return 'Create'
		}
		return 'Next';
	},[steps])

	const secondaryActionLabel = useMemo(()=>{
		if(steps===STEPS.CATEGORY){
			return 'undefined'
		}
		return 'Back';
	},[steps])

	const bodycontent = (
		<div className="flex flex-col gap-8 ">
		<Heading
		title="Choose your favourite state"
		subtitle="Pick a state"


		/>
		<div className=" grid grid-cols-2 md:grid-cols-3  overflow-y-auto h-[50vh]
						">
			
		{
			categories.map(item=>(
				 <div className="" key={item.label}>
					<Categoryinput
					label={item.label}
					city={item.city}
					selected={false}
					onClick={()=>{}}
					/>
				</div>
			))
		}
		</div>
	</div>
	)

	return (	
		<Modal 
		title="Choose your place"
		isOpen={rent.isOpen}
		onClose={rent.onClose}
		actionLabel={actionLabel}
		secondaryActionLabel={secondaryActionLabel}
		secondaryAction={steps===STEPS.CATEGORY?undefined:onBack}
		// label="Submit"
		body={bodycontent}
		/>
)	
}

export default RentModal