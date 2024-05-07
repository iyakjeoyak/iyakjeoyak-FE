import { ModalContext } from "../hooks/useModal";

interface ModalRootProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	toggleOpen: () => void;
	children: React.ReactNode;
}

export default function ModalRoot({
	isOpen,
	onOpen,
	onClose,
	toggleOpen,
	children,
}: ModalRootProps) {
	const value = { isOpen, onOpen, onClose, toggleOpen };
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
