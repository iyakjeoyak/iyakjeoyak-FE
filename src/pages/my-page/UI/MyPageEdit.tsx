import React, { useRef } from "react";
import {
	useForm,
	Controller,
	SubmitHandler,
	FieldValues,
} from "react-hook-form";
import style from "../style/mypageedit.module.scss";
import { UserData } from "../MyPageType";
import { Input } from "@/components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "@/components/Form";

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

interface FormData extends FieldValues {
	[key: string]: string | number | undefined | string[];
	nickname: string;
	introduce: string;
	age: number;
	profileImage?: string;
}

interface MyPageEditProps {
	data: UserData;
}

const inputFields: {
	name: keyof FormData;
	text: string;
	placeholder: string;
	type?: string;
}[] = [
	{ name: "nickname", text: "닉네임", placeholder: "닉네임을 입력해주세요." },
	{
		name: "introduce",
		text: "한줄 소개",
		placeholder: "한줄 소개를 입력해주세요.",
	},
	{
		name: "age",
		text: "만 나이",
		placeholder: "만 나이를 입력해주세요.",
		type: "number",
	},
];

const MyPageEdit: React.FC<MyPageEditProps> = ({ data }) => {
	const defaultImage = "/images/no_profile_image.jpg";
	const methods = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			nickname: data.nickname || "",
			introduce: data.introduce || "",
			age: data.age || 0,
			profileImage: data.profileImage || defaultImage,
		},
	});

	const { control, setValue, handleSubmit, watch } = methods;

	const profileImage = watch("profileImage");
	const imgInputRef = useRef<HTMLInputElement>(null);

	const handleImageClick = () => {
		imgInputRef.current?.click();
	};
	const handleClick = async () => {
		console.log("button formData:", watch());
	};

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		// const onSubmit = (formData: FormData) => {
		console.log(data);
	};
	return (
		<Form
			onSubmit={() => handleSubmit(onSubmit)}
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
							const reader = new FileReader();
							reader.onload = () => {
								if (typeof reader.result === "string") {
									setValue("profileImage", reader.result);
								}
							};
							reader.readAsDataURL(file);
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
				{inputFields.map((field) => (
					<Controller
						key={field.name}
						name={field.name as string}
						control={control}
						render={({ field: { ...rest } }) => (
							<Input
								{...rest}
								text={field.text}
								type={field.type}
								placeholder={field.placeholder}
								className={style.inputStyle}
							/>
						)}
					/>
				))}
			</section>
			<Form.Button
				name="저장"
				type="submit"
				onClick={handleClick}
				variant="dark"
			/>
		</Form>
	);
};

export default MyPageEdit;
