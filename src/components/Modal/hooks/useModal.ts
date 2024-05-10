import { createContext, useContext } from "react";

interface ModalContextType {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	toggleOpen: () => void;
}

export const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	onOpen: () => {},
	onClose: () => {},
	toggleOpen: () => {},
});

export const useModal = () => {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error("useModalContext must be used within ModalProvider");
	}

	return context;
};
