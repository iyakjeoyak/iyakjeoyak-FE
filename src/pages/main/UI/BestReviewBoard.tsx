import BestReviewItem from "./BestReviewItem";
import BoardContainer from "./BoardConatiner";
import reviewQueryOptions from "@/api/review";
import { useQuery } from "@tanstack/react-query";

export default function BestReviewBoard() {
  const {data: reviews} = useQuery(reviewQueryOptions.getBestReview({size: 4}));

	return (
		<BoardContainer title="Best 후기">
      <div style={{
		    display: "grid",
		    gridTemplateColumns: "repeat(4, 1fr)"
    	}}>
        {reviews.map((review)=>	<BestReviewItem key={review.id} review={review}/>)}
      </div>
		</BoardContainer>
	);
}
