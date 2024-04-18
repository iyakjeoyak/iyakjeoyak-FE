import "@styles/global.scss";
import style from "../style/mypage.module.scss";
import modalStyle from "@/components/ModalContainer/index.module.scss";

import mockData from "../mockData";
import TagCommon from "@/components/Tag";
import Point from "@/assets/Point";
import MyPageBox from "./MyPageBox";
import { UserData } from "../MyPageType";
import ModalContainer from "@/components/ModalContainer";
import MyPageEdit from "./MyPageEdit";
import { useState } from "react";

const MyPage: React.FC = () => {
	const [isModalOpen, setIsOpenModal] = useState(false);

	const userData: UserData = mockData;

	const toggleModalOpen = () => {
		setIsOpenModal((prev) => !prev);
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
							className={`${style.profileEditModal} ${modalStyle.container}`}
							toggleModalOpen={toggleModalOpen}
						>
							<MyPageEdit />
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
						<div className={style.pointDetail}> 내역 보기</div>
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
