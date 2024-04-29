import InfoBox from "../InfoBox";

export interface Review {
	date: string;
	history?: string;
}

interface ReviewProps {
	review: Review[];
}

const Review = ({ review }: ReviewProps) => {
	return (
		<InfoBox>
			<InfoBox.Header
				title="내 후기"
				navigateTo="/userinfo/review"
				navigateButton={true}
			/>
			<InfoBox.Item items={review} />
		</InfoBox>
	);
};

export default Review;
