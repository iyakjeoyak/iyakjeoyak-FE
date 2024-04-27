import { useRef, useState } from "react";
import style from "../style/userinfoedit.module.scss";
import { UserData } from "../userInfoType";
import { Form } from "@/components/Form";
import * as yup from "yup";
import Modal from "@/components/Modal";
import getImgPreview from "@/utils/getImgPreview";

const schema = yup
	.object({
		nickname: yup
			.string()
			.required("아이디를 입력하세요.")
			.min(5, "닉네임은 5자리 이상이어야합니다."),
		introduce: yup
			.string()
			.required("소개를 입력해주세요.")
			.max(20, "20자 이내로 작성해주세요."),
		age: yup.number().required("만 나이를 입력해주세요.").min(1).max(100),
		profileImage: yup.string().optional(),
	})
	.required();

interface MyPageEditProps {
	data: UserData;
}

const UserInfoEdit: React.FC<MyPageEditProps> = ({ data }) => {
	const defaultImage = "/images/no_profile_image.jpg?url";
	const [profileImage, setProfileImage] = useState(
		data.profileImage || defaultImage,
	);

	const imgInputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		imgInputRef.current?.click();
	};

	// const onSubmit = (data) => {
	// 	console.log("폼 제출이랄까");
	// };

	return (
		<Modal>
			<Modal.ModalContent>
				<Form
					validationSchema={schema}
					pageDefaultValues={data}
					// onSubmit={onSubmit}
					className={style.mypageEditContainer}
				>
					<div className={style.profileEditTitle}> 내 프로필</div>

					<section className={style.profilePicEdit}>
						<input
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							ref={imgInputRef}
							onChange={(event) => {
								const file = event.target.files?.[0];
								if (file) {
									// const reader = new FileReader();
									// reader.onload = () => {
									// 	if (typeof reader.result === "string") {
									// 		setValue("profileImage", reader.result);
									// 	}
									// };
									// reader.readAsDataURL(file);
									getImgPreview(file, setProfileImage, () => {});
								}
							}}
						/>
						<img
							className={
								profileImage === defaultImage
									? style.defaultProfile
									: style.userProfile
							}
							src={profileImage}
							alt="사용자 프로필"
							onClick={handleImageClick}
						/>
						<span className={style.imgButton}>+</span>
					</section>
					<section className={style.profileInfoEdit}>
						<Form.Input
							name="닉네임"
							placeholder={data.nickname || "닉네임을 입력해주세요."}
							className={style.inputStyle}
						/>
						<Form.Input
							name="한줄 소개"
							placeholder={data.introduce || "한줄 소개를 입력해주세요."}
							className={style.inputStyle}
						/>
						<Form.Input
							name="만 나이"
							type="number"
							placeholder={data.age.toString() || "만 나이를 입력해주세요."}
							className={style.inputStyle}
						/>
					</section>

					<Form.Button
						type="submit"
						// onClick={handleClick}
						variant="dark"
						text="저장"
					/>
				</Form>
			</Modal.ModalContent>
		</Modal>
	);
};

export default UserInfoEdit;
