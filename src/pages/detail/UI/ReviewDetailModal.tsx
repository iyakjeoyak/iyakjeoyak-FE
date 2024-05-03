import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useMutation, useQuery } from "@tanstack/react-query";

import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import postReviewLike from "@/api/review/postReviewLike";
import { queryClient } from "@/main";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewDetailModal.module.scss";

export default function ReviewDetailModal({ reviewId } : { reviewId: number }) {
	
  const {data: { content, title, createdBy, createdDate, hashtagResult, heartCount, star}}= useQuery(reviewQueryOptions.getReviewById({reviewId}));

  const { mutate: likeMutate } = useMutation({
    mutationFn: postReviewLike, 
    onSuccess: () => {queryClient.invalidateQueries(reviewQueryOptions.getReviewById({reviewId}))}});
  
  const handleLikeClick = () => {
    likeMutate(reviewId)
  };

  return (
		<article className={styles.container}>
      <button className={styles.heart} onClick={handleLikeClick}>{heartCount === 0 ? <IoMdHeartEmpty /> : <IoMdHeart />}{heartCount}</button>
      <h2>{title}</h2>
			<WriterTitle userId={createdBy.userId} image={createdBy.image} nickname={createdBy.nickname} createdDate={createdDate} star={star} />
			{hashtagResult.length !== 0 && <div className={styles.tags}>
				{hashtagResult?.map((tag)=><TagCommon text={tag.name}/>)}
			</div>}
			<div>{content}</div>
			<div>사진</div>
		</article>
	);
}
