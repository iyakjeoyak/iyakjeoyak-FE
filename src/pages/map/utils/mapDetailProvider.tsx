import { useState } from "react";
import { PharmacyContext } from "./mapDetailContext";

export const PharmacyProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};
	return (
		<PharmacyContext.Provider
			value={{ selectedPharmacy: null, showModal, setShowModal: toggleModal }}
		>
			{children}
		</PharmacyContext.Provider>
	);
};
