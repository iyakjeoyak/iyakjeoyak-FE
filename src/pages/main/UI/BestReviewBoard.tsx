import BestReviewItem from "./BestReviewItem";
import BoardContainer from "./BoardConatiner";

export default function BestReviewBoard() {
	return (
		<BoardContainer title="Best 후기">
      <div style={{
		    display: "grid",
		    gridTemplateColumns: "repeat(4, 1fr)"
    	}}>
			<BestReviewItem />
			<BestReviewItem />
			<BestReviewItem />
			<BestReviewItem />
      </div>
		</BoardContainer>
	);
}
