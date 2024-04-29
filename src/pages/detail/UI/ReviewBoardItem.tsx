import Modal from "@/components/Modal";
import ReviewDetailModal from "./ReviewDetailModal";
import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import styles from "../styles/ReviewBoardItem.module.scss";

export default function ReviewBoardItem({reviewItem}:{reviewItem: ReviewItemType}) {

  const { content } = reviewItem;
	
  return (
		<Modal>
			<Modal.Trigger
				openElement={
					<div className={styles.container}>
						<WriterTitle />
						<div className={styles["review-container"]}>
							<img />
							<div className={styles["content-container"]}>
								<p>{content}</p>
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
			<Modal.Content>
				<ReviewDetailModal />
			</Modal.Content>
		</Modal>
	);
}
