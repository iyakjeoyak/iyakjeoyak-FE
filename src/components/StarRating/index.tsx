import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import style from "./index.module.scss";

interface StarRatingProps {
	totalStars?: number;
	filledStars: number;
	size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
	totalStars = 5,
	filledStars,
	size = 15,
}) => {
	const stars = Array.from({ length: totalStars }, (_, index) => {
		const isHalfStar = filledStars - index === 0.5;
		const isFilledStar = index < filledStars;

		return isFilledStar ? (
			isHalfStar ? (
				<FaStarHalfAlt key={index} size={size} />
			) : (
				<FaStar key={index} size={size} />
			)
		) : (
			<FaRegStar key={index} size={size} />
		);
	});

	return (
		<div className={style.starRatingContainer}>
			<div className={style.stars}>{stars}</div>
			<div className={style.ratingNumber}>{filledStars.toFixed(1)}</div>
		</div>
	);
};

export default StarRating;
