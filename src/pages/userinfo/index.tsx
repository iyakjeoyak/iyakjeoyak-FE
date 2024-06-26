import "@styles/global.scss";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import PointContent from "./UI/Point/PointContent";
import FlexBox from "@/styles/FlexBox";
import { Review, Supplement } from "./UI";
import { useQuery } from "@tanstack/react-query";
import userInfoQueryOptions from "@api/useInfo/index";

const UserInfo = () => {
	const navigate = useNavigate();

	const { data: userData } = useQuery({
		...userInfoQueryOptions.getUserInfo(),
	});

	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={userData?.userResult} />
			<FlexBox direction="column">
				<PointContent
					onNavigate={goToPointDetail}
					points={userData?.userResult.point}
				/>
				<Review review={userData?.latestReviews} />
				<Supplement supplement={userData?.favoriteSupplements} />
			</FlexBox>
		</section>
	);
};

export default UserInfo;
