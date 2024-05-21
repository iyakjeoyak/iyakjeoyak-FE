import { FaRegStar, FaStar } from "react-icons/fa";

import Container from "../Container";
import styles from "./index.module.scss";

const StarRatingKey = {
	FIRST: 1,
	SECOND: 2,
	THIRD: 3,
	FOURTH: 4,
	FIFTH: 5,
};

const StarRating = ({
	star,
	onClick,
}: {
	star: number;
	onClick: (rating: number) => void;
}) => {
	return (
		<Container title="별점 선택">
			<div className={styles.container}>
				<div className={styles.stars}>
					{Object.entries(StarRatingKey).map(([key, rating]) =>
						rating <= star ? (
							<FaStar
								key={key}
								onClick={() => {
									onClick(Number(rating));
								}}
							/>
						) : (
							<FaRegStar
								key={key}
								onClick={() => {
									onClick(Number(rating));
								}}
							/>
						),
					)}
				</div>
				<div className={styles.number}>{star}</div>
			</div>
		</Container>
	);
};

export default StarRating;
