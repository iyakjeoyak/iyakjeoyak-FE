import { createContext, useContext } from "react";

interface ModalContextType {
	isModalOpen: boolean;
	toggleModalOpen: () => void;
}

export const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	toggleModalOpen: () => {},
});

export const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error("useModalContext must be used within ModalProvider");
	}

	return context;
};
