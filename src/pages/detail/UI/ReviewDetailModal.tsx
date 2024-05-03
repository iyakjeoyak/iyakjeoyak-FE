import TagCommon from "@/components/Tag";
import WriterTitle from "@/components/WriterTitle";
import reviewQueryOptions from "@/api/review";
import styles from "../styles/ReviewDetailModal.module.scss";
import { useQuery } from "@tanstack/react-query";

export default function ReviewDetailModal({ reviewId } : { reviewId: number }) {
	
  const {data: { content, title, createdBy, createdDate, hashtagResult, heartCount, star}}= useQuery(reviewQueryOptions.getReviewById({reviewId}));

  return (
		<article className={styles.container}>
      <h2>{title}</h2>
			<WriterTitle userId={createdBy.userId} image={createdBy.image} nickname={createdBy.nickname} createdDate={createdDate} star={star} heartCount={heartCount} />
			{hashtagResult.length !== 0 && <div className={styles.tags}>
				{hashtagResult?.map((tag)=><TagCommon text={tag.name}/>)}
			</div>}
			<div>{content}</div>
			<div>사진</div>
		</article>
	);
}
