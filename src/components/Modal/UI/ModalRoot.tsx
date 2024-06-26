import Close from "./Close";
import Content from "./Content";
import { ModalContext } from "../hooks/useModal";
import Overlay from "./Overlay";
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

/** 외부에서 isOpen 상태 받아옴 */
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

/** 내부에서 isOpen 상태 생성 */
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

/** 외부에서 모든 정보를 받아오는 가이드 */
export function ModalTemplate({ trigger, content, close }: ModalTemplateProps) {
	const { isOpen, onClose, onOpen, toggleOpen } = useToggle();

	const value = { isOpen, onOpen, onClose, toggleOpen };

	return (
		<ModalContext.Provider value={value}>
			<Trigger>{trigger}</Trigger>
			<Overlay>
				<Content>{content}</Content>
				{close && <Close />}
			</Overlay>
		</ModalContext.Provider>
	);
}
