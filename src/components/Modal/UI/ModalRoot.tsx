import Close from "./Close";
import Content from "./Content";
import { ModalContext } from "../hooks/useModal";
import React from "react";
import Trigger from "./Trigger";
import useToggle from "@/hooks/useToggle";

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
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	const value = { isOpen, onOpen, onClose, toggleOpen };

	return (
		<ModalContext.Provider value={value}>{children}</ModalContext.Provider>
	);
}

interface ModalTemplateProps {
	trigger: React.ReactElement;
	content: React.ReactElement;
	close: boolean;
}

export function ModalTemplate({ trigger, content, close }: ModalTemplateProps) {
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	const value = { isOpen, onOpen, onClose, toggleOpen };

	return (
		<ModalContext.Provider value={value}>
			<Trigger>{trigger}</Trigger>
			<Content>{content}</Content>
			{close && <Close />}
		</ModalContext.Provider>
	);
}
