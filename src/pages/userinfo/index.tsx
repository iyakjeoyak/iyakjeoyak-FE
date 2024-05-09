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
import { userContext } from "./utils/userContext";

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
			} catch (error) {
				showToast({
					type: "error",
					message: "유저데이터 에러",
				});
			}
		};
		fetchUserInfo();
	}, []);

	useEffect(() => {}, [userData]);

	const goToPointDetail = () => {
		navigate(`/userinfo/point`);
	};

	if (!userData) {
		return <Loading />;
	}
	return (
		<userContext.Provider value={{ userData, setUserData }}>
			<section className={style.mypageContainer}>
				<UserInfoBox />
				<FlexBox direction="column">
					<PointContent points={userData.point} onNavigate={goToPointDetail} />
					<Review review={latestReviews} />
					<Supplement supplement={favoriteSupplements} />
				</FlexBox>
			</section>
		</userContext.Provider>
	);
};

export default UserInfo;
