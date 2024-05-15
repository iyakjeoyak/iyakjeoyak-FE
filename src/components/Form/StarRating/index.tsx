import { FaRegStar, FaStar } from "react-icons/fa";
import { useController, useFormContext } from "react-hook-form";

import Container from "../Container";
import styles from "./index.module.scss";

const StarRatingKey = {
	FIRST: 1,
	SECOND: 2,
	THIRD: 3,
	FOURTH: 4,
	FIFTH: 5,
};

const StarRating = ({ name = "star" }) => {
	const { control } = useFormContext();
	const { field } = useController({ name, control });

	const handleStarClick = (rating: number) => {
		field.onChange(rating);
	};

	return (
		<Container title="별점 선택" name={name}>
			<div className={styles.container}>
				<div className={styles.stars}>
					{Object.entries(StarRatingKey).map(([key, rating]) =>
						rating <= field.value ? (
							<FaStar
								key={key}
								onClick={() => handleStarClick(Number(rating))}
							/>
						) : (
							<FaRegStar
								key={key}
								onClick={() => handleStarClick(Number(rating))}
							/>
						),
					)}
				</div>
				<div className={styles.number}>{field.value}</div>
			</div>
		</Container>
	);
};

export default StarRating;
