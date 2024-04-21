import style from "../index.module.scss";
import modalStyle from "@/components/ModalContainer/index.module.scss";
import { UserData } from "../userInfoType";
import TagCommon from "@/components/Tag";
import ModalContainer from "@/components/ModalContainer";
import { useState } from "react";
import UserInfoEdit from "../UI/UserInfoEdit";

export interface UserInfoBoxProps {
	userData: UserData;
}

const UserInfoBox = ({ userData }: UserInfoBoxProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModalOpen = () => {
		setIsModalOpen((prev) => !prev);
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
							<UserInfoEdit data={userData} />
						</ModalContainer>
					)}
					<div className={style.editprofile} onClick={toggleModalOpen}>
						프로필 수정하기
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserInfoBox;
