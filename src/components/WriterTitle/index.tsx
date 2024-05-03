import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { ReviewWriterType } from "@/types";
import StarRating from "../StarRating";
import styles from "./index.module.scss";

interface WriterTitleProps extends ReviewWriterType {
  createdDate: string;
  star: number;
  heartCount: number;
}

export default function WriterTitle({ nickname, star, heartCount, createdDate}:WriterTitleProps) {
	
  const date = new Date(createdDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
		<div className={styles.container}>
			<img />
			<div className={styles["content-container"]}>
				<div className={styles.star}>
					<StarRating filledStars={star} />
				</div>
				<div className={styles.writer}>
          {nickname}<span>{year}.{month}.{day}</span>
				</div>
			</div>
      {/* 다른 사람들의 좋아요에 따라 하트를 해야하나,, */}
      <button>{heartCount === 0 ? <IoMdHeartEmpty /> : <IoMdHeart />}{heartCount}</button>
		</div>
	);
}
