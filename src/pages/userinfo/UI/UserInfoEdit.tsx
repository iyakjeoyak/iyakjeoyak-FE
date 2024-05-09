import style from "../style/userinfoedit.module.scss";
import { Form } from "@/components/Form";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { showToast } from "@/utils/ToastConfig";
import patchUserInfo from "@/api/useInfo/patchUserInfo";
import transformSubmmit from "../utils/transformSubmmit";
import commonQueryOptions from "@/api/common";
import { useUserContext } from "../utils/userContext";
import getUserInfo from "@/api/useInfo/getUserInfo";

const userInfoSchema = yup.object().shape({
	nickname: yup
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

	imgFile: yup.mixed<File>().nullable(),

	hashtagResultList: yup
		.array()
		.of(yup.number().required())
		.min(2, "태그를 2개 이상 선택해주세요")
		.required("태그 선택하세요."),
});

interface MyPageEditProps {
	// data: UserResult;
	onClose: () => void;
}
interface imageEdit {
	id: number;
	fullPath: File;
}

export interface UserSubmmit {
	nickname: string;
	gender: string;
	age: number;
	introduce?: string;
	hashtagResultList: number[];
	imgFile: File | null;
}

export interface UserEdit {
	nickname: string;
	gender: string;
	age: number;
	introduce?: string;
	hashtagResultList?: number[];
	image?: imageEdit;
}

const UserInfoEdit = ({ onClose }: MyPageEditProps) => {
	const { userData: data, setUserData } = useUserContext();

	const { mutate } = useMutation({
		mutationFn: patchUserInfo,
	});

	const fetchUpdatedUserInfo = async () => {
		const updatedUserInfo = await getUserInfo();
		if (updatedUserInfo.userResult) {
			setUserData(updatedUserInfo.userResult);
		}
	};

	if (!data) {
		showToast({ type: "error", message: "사용자 데이터가 없습니다." });
		return null;
	}

	const submmitData = transformSubmmit(data);

	const { data: tags } = useQuery(commonQueryOptions.getHashtags());

	const onSubmit = (submmitData: UserSubmmit) => {
		const { imgFile, ...jsonData } = submmitData;

		const formData = new FormData();
		const userEditPayload = {
			...jsonData,
		};

		formData.append(
			"userEditPayload",
			new Blob([JSON.stringify(userEditPayload)], { type: "application/json" }),
		);

		formData.append("imgFile", imgFile || "");

		mutate(formData, {
			onSuccess: () => {
				showToast({ type: "success", message: "성공적으로 수정되었습니다." });
				fetchUpdatedUserInfo();
				onClose();
			},
			onError: () => {
				showToast({
					type: "error",
					message: "유저 정보가 정상적으로 수정되지 않았습니다.",
				});
			},
		});
	};

	return (
		<Form
			validationSchema={userInfoSchema}
			pageDefaultValues={submmitData}
			onSubmit={onSubmit}
			className={style.mypageEditContainer}
		>
			<section className={style.profilePicEdit}>
				<Form.ImgInput name="imgFile" title="내 프로필" />
			</section>
			<section className={style.profileInfoEdit}>
				<Form.Input
					name="nickname"
					title="닉네임"
					placeholder="닉네임을 입력해주세요."
					defaultValue={submmitData.nickname}
					className={style.inputStyle}
				/>
				<Form.Input
					name="introduce"
					title="한줄 소개"
					placeholder="한줄 소개를 입력해주세요."
					defaultValue={submmitData.introduce}
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
					defaultValue={submmitData.age}
					className={style.inputStyle}
				/>
			</section>

			<Form.TagBoard
				title="태그 리스트"
				tags={tags ?? []}
				name="hashtagResultList"
			/>

			<Form.Button type="submit" variant="dark" text="저장" />
		</Form>
	);
};

export default UserInfoEdit;
