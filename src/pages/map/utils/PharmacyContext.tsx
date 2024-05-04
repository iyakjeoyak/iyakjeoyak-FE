import { useState, MouseEvent, useEffect } from "react";
import { PharmacyContext } from "./mapDetailContext";
import { PharmacyDetailType } from "@/api/map/getPharmacyDetail";

export const PharmacyProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedPharmacy, setSelectedPharmacy] =
		useState<PharmacyDetailType | null>(null);

	const toggleModal = () => {
		setShowModal((prev) => !prev);
		console.log("모달뜨니?");
	};

	useEffect(() => {
		console.log(showModal, "머가 뜨긴해?");
	}, [showModal]);
	return (
		<PharmacyContext.Provider
			value={{
				selectedPharmacy,
				showModal,
				toggleModal,
				setShowModal,
				setSelectedPharmacy,
			}}
		>
			{children}
		</PharmacyContext.Provider>
	);
};
