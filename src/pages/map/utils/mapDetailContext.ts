import { createContext, useContext } from "react";
import { PharmacyDetailType } from "@pages/map/mapTypes";

interface PharmacyContextType {
	selectedPharmacy: PharmacyDetailType | null;
	showModal: boolean;
	toggleModal: () => void;
	toggleLike: () => void;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	setSelectedPharmacy: React.Dispatch<
		React.SetStateAction<PharmacyDetailType | null>
	>;
	isLikeClicked: boolean;
	setIsLikeCliked: React.Dispatch<React.SetStateAction<boolean>>;
}

const initPharmacyContext: PharmacyContextType = {
	selectedPharmacy: null,
	showModal: false,
	setShowModal: () => {},
	toggleModal: () => {},
	toggleLike: () => {},
	setSelectedPharmacy: () => {},
	isLikeClicked: false,
	setIsLikeCliked: () => {},
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
