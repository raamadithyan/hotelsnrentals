'use client';

import Heading from "../heading/Heading";
import { useMemo, useState } from "react";

import {FieldValues, useForm } from "react-hook-form";
import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";
import { categories } from "../navbar/Categories";
 import Categoryinput from "../input/Categoryinput";
 import Countryselect from "../input/Countryselect";


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
	const{register,handleSubmit,setValue,watch,formState:{errors,},reset} = useForm<FieldValues>({
		defaultValues:{
			category:'',
			location:null,
			questCount:1,
			bathroomCount:1,
			imgSrc:'',
			price:1,
			title:'',
			description:'',
		}

	})
	const category = watch('category')

	const setCustomValue = (id:string,value:any) => {
		setValue(id,value,{
			shouldValidate:true,
			shouldDirty:true,
			shouldTouch:true
				})
	}

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
			return undefined
		}
		return 'Back';
	},[steps])

	let bodycontent = (
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
					selected={category===item.label}
					onClick={(category)=>{ return setCustomValue('category',category)}}
					/>
				</div>
			))
		}
		</div>
	</div>
	)

	if(steps===STEPS.LOCATION){
		bodycontent=(
			<div>
				<Heading
				title="Wher is your place located?"
				subtitle="Help Guests find you"
				/>
				<Countryselect/>  
			</div>
			)

	}

	return (	
		<Modal 
		title="Choose your place"
		isOpen={rent.isOpen}
		onClose={rent.onClose}
		onSubmit={onNext}
		actionLabel={actionLabel}
		secondaryActionLabel={secondaryActionLabel}
		secondaryAction={steps===STEPS.CATEGORY?undefined:onBack}
		// label="Submit"
		body={bodycontent}
		/>
)	
}

export default RentModal