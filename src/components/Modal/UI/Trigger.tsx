import { useModal } from "../hooks/useModal";

interface TriggerProps {
	openElement: React.ReactNode;
}

export default function Trigger({ openElement }: TriggerProps) {
	const { onOpen } = useModal();
	return <div onClick={onOpen}>{openElement}</div>;
}
