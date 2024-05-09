import Close from "./Close";
import Content from "./Content";
import { ModalContext } from "../hooks/useModal";
import React from "react";
import Trigger from "./Trigger";
import useOpen from "@/hooks/useOpen";

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

export function ModalWithOpen({ children }: { children: React.ReactNode }) {
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

	const value = { isOpen, onOpen, onClose, toggleOpen };

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}

interface ModalFullTemplate {
	trigger: React.ReactElement;
	content: React.ReactElement;
	close: boolean;
}

export function ModalTemplate({ trigger, content, close }: ModalFullTemplate) {
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

	const value = { isOpen, onOpen, onClose, toggleOpen };

	return (
		<ModalContext.Provider value={value}>
			<Trigger openElement={trigger} />
			<Content>{content}</Content>
			{close && <Close />}
		</ModalContext.Provider>
	);
}
