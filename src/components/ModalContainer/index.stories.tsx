import "@styles/global.scss";

import ModalContainer from ".";
import { useState } from "react";

export default {
	title: "ModalContainer",
	component: ModalContainer,
};

const Template = () => {
	const [isModalOpen, setIsOpenModal] = useState(false);
	const toggleModalOpen = () => {
		setIsOpenModal((prev) => !prev);
	};
	return (
		<main>
			{isModalOpen && (
				<ModalContainer toggleModalOpen={toggleModalOpen}>
					<article>
						모달컨테이너입니다. padding 20px 있습니다. padding-top은 40px입니다.
						min-height 100px입니다 isOpenModal, setIsOpenModal boolean 상태
						만들어서 toggleOpenModalClick 제공해야합니다. children은 article
						태그로 감싸면 좋을거같아요
					</article>
				</ModalContainer>
			)}
			<button onClick={toggleModalOpen}>모달띄우기</button>
		</main>
	);
};

export const Default = Template.bind({});
