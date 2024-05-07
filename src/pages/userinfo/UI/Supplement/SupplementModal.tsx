import SupplementDetailView from "./SupplementDetail";
import SupplementEditForm from "./SupplementEditForm";
import { SupplementInfo } from "../../userInfoType";
import { supplementRecords as data } from "../../utils/mockData";
import { useState } from "react";

interface SupplementDetailModalProps {
	itemId: number;
}

export interface SupplementFormValues {
	mySupplementId?: number;
	name?: string;
	dueDate?: string;
	dosage?: string;
	effect?: string[];
	memo?: string;
	img?: string;
}

const formInitialValues: SupplementInfo = {
	mySupplementId: 0,
	name: "",
	dosage: "",
	dueDate: "",
	effect: [],
	memo: "",
	img: undefined,
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

	const onSubmit = (data: SupplementInfo) => {
		console.log("폼제출", data);
		setSupplementData(data);
		setIsEditing(false);
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
						supplementData?.mySupplementId === 0
							? formInitialValues
							: supplementData
					}
					onSubmit={onSubmit}
				/>
			)}
		</article>
	);
};

export default SupplementModal;
