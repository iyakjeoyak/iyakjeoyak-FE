import { ModalContext } from "../hooks/useModal";
import { useState } from "react";

interface ModalRootProps {
	children: React.ReactNode;
}
export default function ModalRoot({ children }: ModalRootProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModalOpen = () => {
		setIsModalOpen((prev) => !prev);
	};

	const value = { isModalOpen, toggleModalOpen };
	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}
