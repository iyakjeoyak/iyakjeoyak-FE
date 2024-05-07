import { useRef, useState } from "react";
import style from "../style/userinfoedit.module.scss";
import { UserData, UserEdit, UserResult } from "../userInfoType";
import { Form } from "@/components/Form";
import * as yup from "yup";
import Container from "@/components/Form/Container";
import { tagData } from "@/components/Form/TagButton/TagData";
import { useMutation } from "@tanstack/react-query";
import { showToast } from "@/utils/ToastConfig";
import patchUserInfo from "@/api/useInfo/patchUserInfo";

// const tagResultSchema = yup.object().shape({
// 	id: yup.number().required(),
// 	name: yup.string().required(),
// });

const imageSchema = yup
	.object()
	.shape({
		id: yup.number().nullable(),
		fullPath: yup.mixed().nullable().notRequired(),
	})
	.nullable();

const userInfoSchema = yup.object().shape({
	username: yup
		.string()
		.required("닉네임을 입력하세요.")
		.min(5, "닉네임은 5자리 이상이어야합니다."),
	introduce: yup
		.string()
		.required("소개를 입력해주세요.")
		.max(20, "20자 이내로 작성해주세요."),
	gender: yup.string().required("성별을 선택하세요."),
	age: yup
		.number()
		.transform((value) =>
			isNaN(value) || value === null || value === undefined ? 0 : value,
		)
		.required("만 나이를 입력해주세요.")
		.min(1, "나이는 1세 이상이어야 합니다.")
		.max(100, "나이는 100세 이하여야 합니다.")
		.integer("나이를 정수로 입력하세요.")
		.positive("나이는 양수여야 합니다.")
		.required("나이를 입력하세요."),
	image: imageSchema,
	hashtagList: yup.array().of(yup.number()).min(1, "태그를 선택하세요."),
});

interface MyPageEditProps {
	data: UserSubmmit;
}
interface imageEdit {
	id?: number;
	fullPath?: string | File | null;
}
interface tagResult {
	id?: number;
	name?: string;
}
interface UserSubmmit {
	username: string;
	gender: string;
	age: number;
	introduce?: string;
	hashtagList: number[];
	image?: imageEdit;
}

const UserInfoEdit = ({ data }: MyPageEditProps) => {
	const { mutate } = useMutation({
		mutationFn: patchUserInfo,
	});

	const onSubmit = (data: UserEdit) => {
		const { image, ...jsonData } = data;
		console.log("에러나나");

		const formData = new FormData();
		const userEditPayload = {
			...jsonData,
		};
		formData.append(
			"userJoinPayload",
			new Blob([JSON.stringify(userEditPayload)], { type: "application/json" }),
		);
		if (image instanceof File) {
			formData.append("imgFile", image);
		}

		console.log("formdata", formData);
		mutate(formData, {
			onSuccess: () => {
				console.log("ajsep");
				showToast({ type: "success", message: "성공적으로 수정되었습니다." });
			},
			onError: () => {
				console.log("먼데ㄱ");
				showToast({
					type: "error",
					message: "유저 정보가 정상적으로 수정되지 않았습니다.",
				});
			},
		});
	};

	// const defaultImage = "/images/no_profile_image.jpg?url";

	return (
		<Form
			validationSchema={userInfoSchema}
			pageDefaultValues={data}
			onSubmit={onSubmit}
			className={style.mypageEditContainer}
		>
			<section className={style.profilePicEdit}>
				<Form.ImgInput name="porfileImage" title="내 프로필" />
			</section>
			<section className={style.profileInfoEdit}>
				<Form.Input
					name="username"
					title="닉네임"
					placeholder="닉네임을 입력해주세요."
					defaultValue={data.username}
					className={style.inputStyle}
				/>
				<Form.Input
					name="introduce"
					title="한줄 소개"
					placeholder="한줄 소개를 입력해주세요."
					defaultValue={data.introduce}
					className={style.inputStylse}
				/>

				<div className={style.genderTitle}>성별</div>
				<div className={`${style.genderBox}`}>
					<Form.RadioButton name="gender" text="남성" value="MALE" />
					<Form.RadioButton name="gender" text="여성" value="FEMALE" />
					<Form.RadioButton name="gender" text="비공개" value="SECRET" />
				</div>

				<Form.Input
					name="age"
					title="만 나이"
					type="number"
					placeholder="만 나이를 입력해주세요."
					defaultValue={data.age}
					className={style.inputStyle}
				/>
			</section>

			<Container title="건강 고민" name="hashtagList">
				<div className={`${style.tagWrap}`}>
					{tagData?.map((tags) => (
						<Form.TagButton
							key={tags.id}
							text={tags.name}
							name="hashtagList"
							value={tags.id}
						/>
					))}
				</div>
			</Container>

			<Form.Button type="submit" variant="dark" text="저장" />
			<button onClick={() => mutate(new FormData())}>테스트 호출</button>
		</Form>
	);
};

export default UserInfoEdit;
