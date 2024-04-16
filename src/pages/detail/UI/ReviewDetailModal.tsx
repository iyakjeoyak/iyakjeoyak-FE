import ModalContainer from "@/components/ModalContainer";

export default function ReviewDetailModal({
	toggleModalOpen,
}: {
	toggleModalOpen: () => void;
}) {
	return (
		<ModalContainer toggleModalOpen={toggleModalOpen}>
			<article>
				<div>작성자정보</div>
				<div>작성자정보</div>
				<div>작성자정보</div>
				<div>사진</div>
			</article>
		</ModalContainer>
	);
}
