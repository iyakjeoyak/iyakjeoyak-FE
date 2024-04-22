import Modal from "@/components/Modal";
import ReviewDetailModal from "./ReviewDetailModal";
import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import styles from "../styles/ReviewBoardItem.module.scss";

export default function ReviewBoardItem() {
	return (
		<Modal>
			<Modal.ModalOpenNode
				openElement={
					<div className={styles.container}>
						<WriterTitle />
						<div className={styles["review-container"]}>
							<img />
							<div className={styles["content-container"]}>
								<p>맛있어요~!</p>
								<div className={styles["tags"]}>
									<TagCommon text="태그" />
									<TagCommon text="태그" />
									<TagCommon text="태그" />
								</div>
							</div>
						</div>
					</div>
				}
			/>
			<Modal.ModalContent>
				<ReviewDetailModal />
			</Modal.ModalContent>
		</Modal>
	);
}
