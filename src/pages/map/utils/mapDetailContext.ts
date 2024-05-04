import { createContext, useContext, MouseEvent } from "react";
import { PharmacyDetailType } from "@/api/map/getPharmacyDetail";

interface PharmacyContextType {
	selectedPharmacy: PharmacyDetailType | null;
	showModal: boolean;
	toggleModal: (event: MouseEvent) => void;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedPharmacy: React.Dispatch<
		React.SetStateAction<PharmacyDetailType | null>
	>;
}

const initPharmacyContext: PharmacyContextType = {
	selectedPharmacy: null,
	showModal: false,
	setShowModal: () => {},
	toggleModal: () => {},
	setSelectedPharmacy: () => {},
};

export const PharmacyContext =
	createContext<PharmacyContextType>(initPharmacyContext);

export const usePharmacy = () => {
	const context = useContext(PharmacyContext);

	if (!context) {
		throw new Error("지도 조회 컨텍스트 에러");
	}

	return context;
};
