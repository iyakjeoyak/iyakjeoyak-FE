import style from "../index.module.scss";
import modalStyle from "@/components/ModalContainer/index.module.scss";
import { UserData } from "../userInfoType";
import TagCommon from "@/components/Tag";
import UserInfoEdit from "../UI/UserInfoEdit";
import Modal from "@/components/Modal";
export interface UserInfoBoxProps {
	userData: UserData;
}

const UserInfoBox = ({ userData }: UserInfoBoxProps) => {
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
						<TagCommon text="허준" size="small" backgroundColor="lightgreen" />
					</div>
					<div className={style.userIntroduce}> 자기소개글</div>
					<Modal>
						<Modal.Trigger
							openElement={
								<div className={style.editprofile}>프로필 수정하기</div>
							}
						/>
						<Modal.Content>
							<div
								className={` ${modalStyle.container} ${style.profileEditModal}`}
							>
								<UserInfoEdit data={userData} />
							</div>
						</Modal.Content>
					</Modal>
				</div>
			</div>
		</section>
	);
};

export default UserInfoBox;
