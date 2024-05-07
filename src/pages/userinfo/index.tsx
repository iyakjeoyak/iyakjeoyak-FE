import "@styles/global.scss";
import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import UserInfoBox from "./UI/UserInfoBox";
import PointContent from "./UI/Point/PointContent";
import FlexBox from "@/styles/FlexBox";
import { Review, Supplement } from "./UI";
import getUserInfo from "@/api/useInfo/getUserInfo";
import { useEffect, useState } from "react";
import { ReviewType, SupplementType, UserResult } from "./userInfoType";
import { showToast } from "@/utils/ToastConfig";
import Loading from "../feedback/Loading";

const UserInfo = () => {
	const navigate = useNavigate();

	const [userData, setUserData] = useState<UserResult>();
	const [latestReviews, setLatestReviews] = useState<ReviewType[]>();
	const [favoriteSupplements, setFavoriteSupplements] =
		useState<SupplementType[]>();

	useEffect(() => {
		const fetchUserInfo = async () => {
			try {
				const userInfo = await getUserInfo();
				setUserData(userInfo?.userResult);
				setLatestReviews(userInfo?.latestReviews);
				setFavoriteSupplements(userInfo?.favoriteSupplements);
				console.log(userData);
			} catch (error) {
				showToast({
					type: "error",
					message: "유저데이터 에러",
				});
			}
		};
		fetchUserInfo();
	}, []);

	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	if (!userData) {
		return <Loading />;
	}
	return (
		<section className={style.mypageContainer}>
			<UserInfoBox userData={userData} />
			<FlexBox direction="column">
				<PointContent points={userData.point} onNavigate={goToPointDetail} />
				<Review review={latestReviews} />
				<Supplement supplement={favoriteSupplements} />
			</FlexBox>
		</section>
	);
};

export default UserInfo;
