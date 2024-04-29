import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import style from "./index.module.scss";

interface StarRatingProps {
	totalStars?: number;
	filledStars: number;
	size?: number;
}

const StarRating = ({
	totalStars = 5,
	filledStars,
	size = 15,
}: StarRatingProps) => {
	const fullStarsCount = Math.floor(filledStars); // 꽉 채워진 별 개수
	const halffilledStar = filledStars % 1 >= 0.5; // 반 별 존재여부
	const emptyStarsCount =
		totalStars - fullStarsCount - (halffilledStar ? 1 : 0);

	const fullStars = Array(fullStarsCount).fill(<FaStar size={size} />);
	const halfStars = halffilledStar ? [<FaStarHalfAlt size={size} />] : [];
	const emptyStars = Array(emptyStarsCount).fill(<FaRegStar size={size} />);

	const stars = [...fullStars, ...halfStars, ...emptyStars];

	return (
		<div className={style.starRatingContainer}>
			<div className={style.stars}>{stars}</div>
			<div className={style.ratingNumber}>{filledStars.toFixed(1)}</div>
		</div>
	);
};

export default StarRating;
