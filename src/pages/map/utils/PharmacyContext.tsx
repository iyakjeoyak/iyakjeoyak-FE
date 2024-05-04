import { useEffect, useState } from "react";
import { PharmacyContext } from "./mapDetailContext";
import { PharmacyDetailType } from "@pages/map/mapTypes";
import { likedPharmacies } from "./pharmacyMock";

export const PharmacyProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [showModal, setShowModal] = useState(false);
	const [isLikeClicked, setIsLikeCliked] = useState(false);
	const [selectedPharmacy, setSelectedPharmacy] =
		useState<PharmacyDetailType | null>(null);

	const toggleModal = () => {
		setShowModal((prev) => !prev);
	};

	const toggleLike = () => {
		setIsLikeCliked((prev) => !prev);
	};

	useEffect(() => {
		console.log(isLikeClicked);
		if (!showModal && isLikeClicked) {
			//post api 호출하는 곳~
			const postData = likedPharmacies;
			console.log(postData);
			setIsLikeCliked(false);
		}
	}, [isLikeClicked, showModal]);

	return (
		<PharmacyContext.Provider
			value={{
				selectedPharmacy,
				showModal,
				toggleModal,
				toggleLike,
				setShowModal,
				setSelectedPharmacy,
				isLikeClicked,
				setIsLikeCliked,
			}}
		>
			{children}
		</PharmacyContext.Provider>
	);
};
