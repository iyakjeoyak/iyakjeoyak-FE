import { useModal } from "../hooks/useModal";

interface ModalOpenNodeProps {
	openElement: React.ReactNode;
}

export default function ModalOpenNode({ openElement }: ModalOpenNodeProps) {
	const { toggleModalOpen } = useModal();

	return <div onClick={toggleModalOpen}>{openElement}</div>;
}
