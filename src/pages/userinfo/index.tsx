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

	const { data } = useQuery({
		...userInfoQueryOptions.getUserInfo(),
	});

	const userData = data?.userResult;

	console.log(userData);
	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={data?.userResult} />
			<FlexBox direction="column">
				<PointContent onNavigate={goToPointDetail} />
				<Review review={data?.latestReviews} />
				<Supplement supplement={data?.favoriteSupplements} />
			</FlexBox>
		</section>
	);
};

export default UserInfo;
