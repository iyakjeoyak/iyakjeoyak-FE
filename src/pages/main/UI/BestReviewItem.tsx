import { ReviewItemType } from "@/types";
import TagCommon from "@/components/Tag";
import styles from "../styles/BestReviewItem.module.scss";

export default function BestReviewItem({
	review
}: {review: ReviewItemType}) {
	return (
		<div className={styles["container"]}>
			<img className={styles.img} src="https://picsum.photos/200/300" alt={review.title}/>
			<div className={styles["content-container"]}>
				<div>{review.createdBy.nickname}</div>
       { review?.hashtagResult[0]?.name && <TagCommon text={review.hashtagResult[0].name} size="medium" backgroundColor={"green"} />}
			</div>
		</div>
	);
}
