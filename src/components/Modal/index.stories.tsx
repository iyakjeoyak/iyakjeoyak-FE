import "@styles/global.scss";

import Modal from ".";

export default {
	title: "ModalContainer",
	component: Modal,
};

const Template = () => {
	return (
		<main>
				<Modal>
          <Modal.Trigger openElement={<button>모달 열기</button>}/>
					<Modal.Content>
						모달입니다.
            <Modal.Close/>
					</Modal.Content>
				</Modal>
		</main>
	);
};

export const Default = Template.bind({});
