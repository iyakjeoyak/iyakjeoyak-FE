import { ModalContext } from "../hooks/useModal";
import ReactDOM from "react-dom";
import { useContext } from "react";

interface ModalRootProps {
	children: React.ReactNode;
}

export default function Overlay({ children }: ModalRootProps) {
	const { isOpen, toggleOpen } = useContext(ModalContext);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="background" onClick={toggleOpen}>
			{children}
		</div>,
		document.getElementById("modal-root")!,
	);
}
