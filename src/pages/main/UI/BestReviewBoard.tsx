import BestReviewItem from "./BestReviewItem";
import BoardContainer from "./BoardConatiner";

export default function BestReviewBoard() {
	return (
		<BoardContainer title="Best 후기">
			<BestReviewItem />
			<BestReviewItem />
			<BestReviewItem />
			<BestReviewItem />
		</BoardContainer>
	);
}
