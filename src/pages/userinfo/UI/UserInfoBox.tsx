import HeartIcon from "@/assets/icons/HeartIcon";
import Loading from "@/pages/feedback/Loading";
import Modal from "@/components/Modal";
import UserInfoEdit from "../UI/UserInfoEdit";
import { UserResult } from "../userInfoType";
import modalStyle from "@/components/ModalContainer/index.module.scss";
import { routerpaths } from "@/utils/pathName";
import style from "../index.module.scss";
import { useNavigate } from "react-router-dom";
import useToggle from "@/hooks/useToggle";

export interface UserInfoBoxProps {
	userData?: UserResult;
}

const UserInfoBox = ({ userData }: UserInfoBoxProps) => {
	const navigate = useNavigate();
	const {
		isOpen,
		onClose: onCloseEditUserData,
		onOpen,
		toggleOpen,
	} = useToggle();

	if (!userData) {
		return <Loading />;
	}

	return (
		<section className={style.mypageContainer}>
			<div className={style.profileflexSection}>
				<div className={style.profileSection}>
					<img
						className={style.profilePic}
						src={userData?.image?.fullPath}
						alt="Profile"
					/>
					<div className={style.profileInfo}>
						<div className={style.nameArea}>
							<div className={style.nickname}>{userData?.nickname}</div>
							{/* <TagCommon
								text="허준"
								size="small"
								backgroundColor="lightgreen"
							/> */}
						</div>
						<div className={style.userIntroduce}>
							{userData?.introduce
								? userData.introduce
								: "한 줄 소개를 입력해주세요"}
						</div>
						<Modal
							isOpen={isOpen}
							onClose={onCloseEditUserData}
							toggleOpen={toggleOpen}
							onOpen={onOpen}
						>
							<Modal.Trigger>
								<div className={style.editprofile}>프로필 수정하기</div>
							</Modal.Trigger>
							<Modal.Content>
								<div
									className={`${style.profileEditModal} ${modalStyle.container} `}
								>
									<UserInfoEdit
										onClose={onCloseEditUserData}
										userData={userData}
									/>
								</div>
							</Modal.Content>
						</Modal>
					</div>
				</div>
				<div
					className={style.userLikedSupplement}
					onClick={() => navigate(routerpaths.LIKEDITEM)}
				>
					<div className={style.flexBox} />
					<div className={style.buttonBox}>
						<HeartIcon width={15} height={15} />
						<div className={style.likedData}>관심 영양제</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserInfoBox;
