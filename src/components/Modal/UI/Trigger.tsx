import { useModal } from "../hooks/useModal";

interface TriggerProps {
	openElement: React.ReactNode;
}

export default function Trigger({ openElement }: TriggerProps) {
	const { toggleModalOpen } = useModal();

	return <div onClick={toggleModalOpen}>{openElement}</div>;
}
