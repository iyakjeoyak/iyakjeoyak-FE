import { useRef, useState } from "react";
import style from "../style/userinfoedit.module.scss";
import { UserData } from "../userInfoType";
import { Form } from "@/components/Form";
import * as yup from "yup";
import getImgPreview from "@/utils/getImgPreview";
import ImageWithDefault from "@/utils/ImageWithDefault";

const userInfoSchema = yup
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

const UserInfoEdit = ({ data }: MyPageEditProps) => {
	const defaultImage = "/images/no_profile_image.jpg?url";
	const [profileImage, setProfileImage] = useState<string | undefined>(
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
		<Form
			validationSchema={userInfoSchema}
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
						const file = event.target.files?.[0] as File;
						if (file) {
							getImgPreview(file, setProfileImage, () => {});
						}
					}}
				/>
				<ImageWithDefault
					src={profileImage}
					defaultSrc={defaultImage}
					alt="사용자 프로필"
					className={style.userProfile}
					onClick={handleImageClick}
				/>

				<span className={style.imgButton}>+</span>
			</section>
			<section className={style.profileInfoEdit}>
				<Form.Input
					name="닉네임"
					placeholder="닉네임을 입력해주세요."
					defaultValue={data.nickname}
					className={style.inputStyle}
				/>
				<Form.Input
					name="한줄 소개"
					placeholder="한줄 소개를 입력해주세요."
					defaultValue={data.introduce}
					className={style.inputStyle}
				/>
				<Form.Input
					name="만 나이"
					type="number"
					placeholder="만 나이를 입력해주세요."
					defaultValue={data.age.toString()}
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
	);
};

export default UserInfoEdit;
