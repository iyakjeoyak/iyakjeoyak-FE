import { ReviewWriterType } from "@/types";
import StarRating from "../StarRating";
import getFullDate from "@/utils/getFullDate";
import styles from "./index.module.scss";

interface WriterTitleProps extends ReviewWriterType {
	createdDate: string;
	star: number;
}

export default function WriterTitle({
	image,
	nickname,
	star,
	createdDate,
}: WriterTitleProps) {
	const date = new Date(createdDate);

	const writtenDate = getFullDate(date);
	return (
		<div className={styles.container}>
			{image && <img src={image.fullPath} alt="프로필이미지" />}
			<div className={styles["content-container"]}>
				<div className={styles.star}>
					<StarRating filledStars={star} />
				</div>
				<div className={styles.writer}>
					{nickname}
					<span>{writtenDate}</span>
				</div>
			</div>
		</div>
	);
}
