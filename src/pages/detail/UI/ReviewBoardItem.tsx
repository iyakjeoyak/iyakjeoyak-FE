import Modal from "@/components/Modal";
import ReviewDetailModal from "./ReviewDetailModal";
import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import Title from "@/components/WriterTitle";
import styles from "../styles/ReviewBoardItem.module.scss";

export default function ReviewBoardItem({reviewItem}:{reviewItem: ReviewItemType}) {

  const { id, title, star, heartCount, hashtagResult } = reviewItem;
	
  return (
		<Modal>
			<Modal.Trigger
				openElement={
					<div className={styles.container}>
						<Title createdDate={reviewItem.createdDate} star={star} heartCount={heartCount} userId={reviewItem.createdBy.userId} nickname={reviewItem.createdBy.nickname} image={reviewItem.createdBy.image}/>
						<div className={styles["review-container"]}>
							<img />
							<div className={styles["content-container"]}>
								<p>{title}</p>
								<div className={styles["tags"]}>
									{hashtagResult.slice(0,3).map((tag)=><TagCommon text={tag.name} />)}
								</div>
							</div>
						</div>
					</div>
				}
			/>
			<Modal.Content>
				<ReviewDetailModal reviewId={id} />
			</Modal.Content>
		</Modal>
	);
}
