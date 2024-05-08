import SupplementDetailView from "./SupplementDetail";
import SupplementEditForm from "./SupplementEditForm";
import { SupplementSubmmitInfo } from "../../userInfoType";
import { supplementRecords as data } from "../../utils/mockData";
import { useState } from "react";

interface SupplementDetailModalProps {
	itemId: number;
}

export interface SupplementFormValues {
	medicineId?: number;
	medicineName?: string;
	expirationDate?: string;
	memo?: string;
	image?: string;
	// dosage?: string;
	// effect?: string[];
}

const formInitialValues: SupplementSubmmitInfo = {
	medicineId: 0,
	medicineName: "",
	expirationDate: "",
	memo: "",
	image: "",
};

const SupplementModal = ({ itemId }: SupplementDetailModalProps) => {
	const [supplementData, setSupplementData] = useState<SupplementFormValues>(
		data.mySupplements[itemId - 1] || formInitialValues,
	);

	console.log(supplementData);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	return (
		<article>
			{!isEditing ? (
				<SupplementDetailView
					supplementData={supplementData}
					onEdit={handleEditClick}
				/>
			) : (
				<SupplementEditForm
					formInitialValues={
						supplementData?.medicineId === 0
							? formInitialValues
							: supplementData
					}
				/>
			)}
		</article>
	);
};

export default SupplementModal;
