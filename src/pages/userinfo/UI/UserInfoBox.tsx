import HeartIcon from "@/assets/icons/HeartIcon";
import Modal from "@/components/Modal";
import TagCommon from "@/components/Tag";
import { UserData } from "../userInfoType";
import UserInfoEdit from "../UI/UserInfoEdit";
import modalStyle from "@/components/ModalContainer/index.module.scss";
import { routerpaths } from "@/utils/pathName";
import style from "../index.module.scss";
import { useNavigate } from "react-router-dom";
import useOpen from "@/hooks/useOpen";

export interface UserInfoBoxProps {
	userData: UserData;
}

const UserInfoBox = ({ userData }: UserInfoBoxProps) => {
	const navigate = useNavigate();
	const { isOpen, onClose, onOpen, toggleOpen } = useOpen();

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
					<Modal
						isOpen={isOpen}
						onClose={onClose}
						toggleOpen={toggleOpen}
						onOpen={onOpen}
					>
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
					<div
						className={style.userLikedSupplement}
						onClick={() => navigate(routerpaths.LIKEDITEM)}
					>
						<HeartIcon />
						관심 영양제
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserInfoBox;
