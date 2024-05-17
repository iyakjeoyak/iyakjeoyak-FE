import "@styles/global.scss";

import Modal from ".";
import useToggle from "@/hooks/useToggle";

export default {
	title: "ModalContainer",
	component: Modal,
};

const Template = () => {
	const { isOpen, onClose, toggleOpen, onOpen } = useToggle();

	return (
		<main>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				toggleOpen={toggleOpen}
				onOpen={onOpen}
			>
				<Modal.Trigger>
					<button>모달 열기</button>
				</Modal.Trigger>
				<Modal.Content>
					모달입니다.
					<Modal.Close />
				</Modal.Content>
			</Modal>
		</main>
	);
};

export const Default = Template.bind({});
