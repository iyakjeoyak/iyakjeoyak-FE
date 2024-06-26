import { useModal } from "../hooks/useModal";

interface TriggerProps {
	children: React.ReactNode;
}

export default function Trigger({ children }: TriggerProps) {
	const { onOpen } = useModal();
	return <div onClick={onOpen}>{children}</div>;
}
