import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import style from "./index.module.scss";

interface StarRatingProps {
	totalStars?: number;
	filledStars: number;
	size?: number;
}

export function countStar(star: number, totalStars: number) {
	const fullStarsCount = Math.floor(star); // 꽉 채워진 별 개수
	const halffilledStar = star % 1 >= 0.5; // 반 별 존재 여부
	const emptyStarsCount =
		totalStars - fullStarsCount - (halffilledStar ? 1 : 0);

	return { fullStarsCount, halffilledStar, emptyStarsCount };
}

const getStarRating = (
	filledStars: number,
	totalStars: number,
	size: number,
) => {
	const { fullStarsCount, halffilledStar, emptyStarsCount } = countStar(
		filledStars,
		totalStars,
	);

	const fullStars = Array.from({ length: fullStarsCount }, (_, i) => (
		<FaStar key={`full_${i}`} size={size} />
	));
	const halfStars = halffilledStar
		? [<FaStarHalfAlt key="half_0" size={size} />]
		: [];
	const emptyStars = Array.from({ length: emptyStarsCount }, (_, i) => (
		<FaRegStar key={`empty_${i}`} size={size} />
	));

	return [...fullStars, ...halfStars, ...emptyStars];
};

const StarRating = ({
	totalStars = 5,
	filledStars,
	size = 15,
}: StarRatingProps) => {
	const [stars, setStars] = useState<JSX.Element[]>([]);

	useEffect(() => {
		setStars(getStarRating(filledStars, totalStars, size));
	}, [filledStars]);

	return (
		<div className={style.starRatingContainer}>
			<div className={style.stars}>{stars}</div>
			<div className={style.ratingNumber}>{filledStars.toFixed(1)}</div>
		</div>
	);
};

export default StarRating;
