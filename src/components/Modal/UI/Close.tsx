import { useModal } from "../hooks/useModal";

export default function Close() {
  const { toggleModalOpen } = useModal();

	return <button onClick={toggleModalOpen}>닫기</button>;
}
