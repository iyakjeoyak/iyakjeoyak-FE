import "@styles/global.scss";
import style from "./index.module.scss";
import modalStyle from "@/components/ModalContainer/index.module.scss";
import { userMockData } from "./mockData";
import TagCommon from "@/components/Tag";
import Point from "@/assets/Point";
import MyPageBox from "./UI/MyPageBox";
import { UserData } from "./MyPageType";
import ModalContainer from "@/components/ModalContainer";
import MyPageEdit from "./UI/MyPageEdit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
	const navigate = useNavigate();
	const userData: UserData = userMockData;
	const [isModalOpen, setIsOpenModal] = useState(false);

	const toggleModalOpen = () => {
		setIsOpenModal((prev) => !prev);
		console.log("open");
	};

	const pointDetail = () => {
		navigate(`/my-page/point`);
	};

	return (
		<section className={style.mypageContainer}>
			<div className={style.profileSection}>
				<img
					className={style.profilePic}
					src={userData.profileImage}
					alt="Profile"
				/>
				<div className={style.profileInfo}>
					<div className={style.nameArea}>
						<div className={style.nickname}>{userData.nickname}</div>
						<TagCommon
							text="허준"
							size="small"
							backgroundColor="lightgreen"
						></TagCommon>
					</div>
					<div className={style.userIntroduce}> 자기소개글</div>
					{isModalOpen && (
						<ModalContainer
							className={` ${modalStyle.container} ${style.profileEditModal}`}
							toggleModalOpen={toggleModalOpen}
						>
							<MyPageEdit data={userData} />
						</ModalContainer>
					)}
					<div className={style.editprofile} onClick={toggleModalOpen}>
						프로필 수정하기
					</div>
				</div>
			</div>

			<section className={style.myPageContent}>
				<section className={style.pointSection}>
					<div className={style.pointFixArea}>
						<Point className={style.pointSVG} />
						<div className={style.pointTitle}>내 포인트</div>
					</div>

					<div className={style.pointArea}>
						<div className={style.userPoint}>{userData.points}</div>
						<div className={style.pointDetail} onClick={pointDetail}>
							{" "}
							내역 보기
						</div>
					</div>
				</section>

				<MyPageBox sectionType="review" reviews={userData.latestReviews} />

				<MyPageBox
					sectionType="supplement"
					supplements={userData.favoriteSupplements}
				/>
			</section>
		</section>
	);
};

export default MyPage;
