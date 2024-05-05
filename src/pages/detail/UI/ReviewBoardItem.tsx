import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import Modal from "@/components/Modal";
import ReviewDetailModal from "./ReviewDetailModal";
import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import Title from "@/components/WriterTitle";
import postReviewLike from "@/api/review/postReviewLike";
import { queryClient } from "@/main";
import shuffleArray from "@/utils/shuffleArray";
import stopEvent from "@/utils/stopEvent";
import styles from "../styles/ReviewBoardItem.module.scss";
import { useMutation } from "@tanstack/react-query";

export default function ReviewBoardItem({reviewItem}:{reviewItem: ReviewItemType}) {

  const { id: reviewId, title, star, heartCount, hashtagResult } = reviewItem;

  const { mutate: likeMutate } = useMutation({
    mutationFn: postReviewLike, 
    onSuccess: () => { queryClient.invalidateQueries({queryKey: ['reviews']})}
  })
  
  const handleLikeClick = (e: React.MouseEvent) => {
    stopEvent('propagation')(e);
    likeMutate(reviewId)
  };

  const selectedHashtag = shuffleArray(hashtagResult);

  return (
		<Modal>
			<Modal.Trigger
				openElement={
					<div className={styles.container}>
            <button className={styles.heart} onClick={handleLikeClick}>{heartCount === 0 ? <IoMdHeartEmpty /> : <IoMdHeart />}{heartCount}</button>
						<Title createdDate={reviewItem.createdDate} star={star}  userId={reviewItem.createdBy.userId} nickname={reviewItem.createdBy.nickname} image={reviewItem.createdBy.image}/>
						<div className={styles["review-container"]}>
							<img />
							<div className={styles["content-container"]}>
								<p>{title}</p>
								<div className={styles["tags"]}>
									{selectedHashtag.map((tag)=><TagCommon text={tag.name} />)}
								</div>
							</div>
						</div>
					</div>
				}
			/>
			<Modal.Content>
				<ReviewDetailModal reviewId={reviewId} />
			</Modal.Content>
		</Modal>
	);
}
