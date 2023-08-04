'use client';


import Modal from "./Modal";
import useRentModal from "@/app/hooks/useRentModal";



const RentModal = () => {
	const rent = useRentModal()
	return (
		<Modal
		title="Choose your style"
		isOpen={rent.isOpen}
		onClose={rent.onClose}
		label="Submit"
		/>
	)
}

export default RentModal