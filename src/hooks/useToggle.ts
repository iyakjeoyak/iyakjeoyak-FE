import { useState } from "react";

const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const onOpen = () => {
		setIsOpen(true);
	};

	return { isOpen, toggleOpen, onOpen, onClose };
};

export default useToggle;
