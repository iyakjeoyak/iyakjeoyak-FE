import "@styles/global.scss";

import Modal from ".";
import useOpen from "@/hooks/useOpen";

export default {
	title: "ModalContainer",
	component: Modal,
};

const Template = () => {
	const { isOpen, onClose, toggleOpen, onOpen } = useOpen();

	return (
		<main>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
				toggleOpen={toggleOpen}
				onOpen={onOpen}
			>
				<Modal.Trigger openElement={<button>모달 열기</button>} />
				<Modal.Content>
					모달입니다.
					<Modal.Close />
				</Modal.Content>
			</Modal>
		</main>
	);
};

export const Default = Template.bind({});
