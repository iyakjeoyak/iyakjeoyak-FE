import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { FaShare } from "react-icons/fa";
import IconTag from "@/components/IconTag";
import StarRating from "@/components/StarRating";
import TagCommon from "@/components/Tag";
import styles from "../styles/MedicineCard.module.scss";

interface MedicineCardProps {
  name: string;
  brand: string;
  heartCount: number;
  reviewCount: number;
  grade: number
}

export default function MedicineCard({name, brand, heartCount, grade, reviewCount}:MedicineCardProps) {

	const handleLikeClick = () => {
		console.log("관심 등록");
	};

	const handleShareClick = () => {
		console.log("공유하기");
	};

	return (
		<div className={styles.container}>
			<img src="/images/Medicine.png" />
			<div className={styles["content-container"]}>
				<div className={styles["info"]}>
					<div className={styles.brand}>{brand}</div>
					<div className={styles.name}>{name}</div>
				</div>
				<div className={styles["sub-info"]}>
					<StarRating filledStars={grade} />
					<span>({reviewCount}개)</span>
				</div>
				<div className={styles.tags}>
					<TagCommon text="피로개선" backgroundColor="green" />
					<TagCommon text="감기" backgroundColor="green" />
				</div>
			</div>
			<div className={styles.buttons}>
				<IconTag
					icon={heartCount === 0 ? <IoMdHeartEmpty /> : <IoMdHeart />}
					text="관심 등록"
					onClick={handleLikeClick}
				/>
				<IconTag
					icon={<FaShare />}
					text="공유하기"
					onClick={handleShareClick}
				/>
			</div>
		</div>
	);
}
