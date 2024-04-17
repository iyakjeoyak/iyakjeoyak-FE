import ModalContainer from "@/components/ModalContainer";
import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import styles from "../styles/ReviewDetailModal.module.scss";

export default function ReviewDetailModal({
	toggleModalOpen,
}: {
	toggleModalOpen: () => void;
}) {
	return (
		<ModalContainer toggleModalOpen={toggleModalOpen}>
			<article className={styles.container}>
				<WriterTitle />
				<div className={styles.tags}>
					<TagCommon text="태그" />
					<TagCommon text="태그" />
					<TagCommon text="태그" />
					<TagCommon text="태그" />
				</div>
				<div>작성자정보</div>
				<div>사진</div>
			</article>
		</ModalContainer>
	);
}
