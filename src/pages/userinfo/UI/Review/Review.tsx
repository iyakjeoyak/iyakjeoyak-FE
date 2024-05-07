import InfoBox from "../InfoBox";
import { ReviewType } from "../../userInfoType";
interface ReviewProps {
	review?: ReviewType[];
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
