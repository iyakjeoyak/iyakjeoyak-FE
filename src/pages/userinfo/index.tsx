import "@styles/global.scss";
import style from "./index.module.scss";
import { userMockData as userData } from "./mockData";
import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import SimplePointBox from "./UI/UserPointBox";
import { UserInfoContent } from "./UI";
import FlexBox from "@/styles/FlexBox";

const UserInfo = () => {
	const navigate = useNavigate();

	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={userData} />
			<FlexBox direction="column">
				<SimplePointBox points={userData.points} onNavigate={goToPointDetail} />
				<UserInfoContent sectionType="review" data={userData.latestReviews} />
				<UserInfoContent
					sectionType="supplement"
					data={userData.favoriteSupplements}
				/>
			</FlexBox>
		</section>
	);
};

export default UserInfo;
