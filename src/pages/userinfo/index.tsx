import "@styles/global.scss";
import style from "./index.module.scss";
import { userMockData } from "./mockData";
import SimpleInfoBox from "./UI/SimpleInfoBox";
import { UserData } from "./userInfoType";

import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import SimplePointBox from "./UI/SimplePointBox";

const UserInfo: React.FC = () => {
	const navigate = useNavigate();
	const userData: UserData = userMockData;

	const pointDetail = () => {
		navigate(`/userinfo/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={userData} />

			<SimplePointBox points={userData.points} onNavigate={pointDetail} />

			<SimpleInfoBox sectionType="review" reviews={userData.latestReviews} />

			<SimpleInfoBox
				sectionType="supplement"
				supplements={userData.favoriteSupplements}
			/>
		</section>
	);
};

export default UserInfo;
