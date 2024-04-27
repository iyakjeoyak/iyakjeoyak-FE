import "@styles/global.scss";
import style from "./index.module.scss";
import { userMockData as userData } from "./mockData";
import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import PointContent from "./UI/PointContent";
import FlexBox from "@/styles/FlexBox";
import { Review, Supplement, UserInfoEdit } from "./UI";

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
			<UserInfoEdit data={userData} />
		</section>
	);
};

export default UserInfo;
