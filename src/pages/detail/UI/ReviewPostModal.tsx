import ModalContainer from "@/components/ModalContainer";

export default function ReviewPostModal({
	toggleModalOpen,
}: {
	toggleModalOpen: () => void;
}) {
	return (
		<ModalContainer toggleModalOpen={toggleModalOpen}>
			<article>
				<h2>약 이름</h2>
				<div>
					<h4>별점</h4>
				</div>
				<div>
					<h4>태그</h4>
				</div>
			</article>
		</ModalContainer>
	);
}
