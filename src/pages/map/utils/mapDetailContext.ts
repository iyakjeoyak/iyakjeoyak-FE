import { createContext, useContext } from "react";
import { PharmacyDetailType } from "@/api/map/getPharmacyDetail";

interface PharmacyContextType {
	selectedPharmacy: PharmacyDetailType | null;
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initPharmacyContext = {
	selectedPharmacy: null,
	showModal: false,
	setShowModal: () => {},
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
