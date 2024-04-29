import "@styles/global.scss";
import style from "./index.module.scss";
import { userMockData as userData } from "./mockData";
import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import PointContent from "./UI/Point/PointContent";
import FlexBox from "@/styles/FlexBox";
import { Review, Supplement } from "./UI";

const UserInfo = () => {
	const navigate = useNavigate();

	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={userData} />
			<FlexBox direction="column">
				<PointContent points={userData.points} onNavigate={goToPointDetail} />
				<Review review={userData.latestReviews} />
				<Supplement supplement={userData.favoriteSupplements} />
			</FlexBox>
		</section>
	);
};

export default UserInfo;
