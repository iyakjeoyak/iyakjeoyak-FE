import { useModal } from "../hooks/useModal";

export default function Close() {
	const { toggleOpen } = useModal();

	return <button onClick={toggleOpen}>닫기</button>;
}
