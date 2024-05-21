import * as yup from "yup";

export const initialMedicineReviewPostBody = {
	title: "",
	content: "",
	tagList: [],
	star: 0,
};

const medicineReviewPostValidation = yup.object().shape({
	title: yup.string().required("영양제 리뷰 제목을 작성해주세요."),
	content: yup
		.string()
		.min(10, "10자 이상의 후기를 입력해주세요")
		.required("영양제 리뷰를 작성해주세요"),
	tagList: yup
		.array()
		.of(yup.number().required())
		.min(1, "태그를 선택하세요.")
		.required("태그를 선택하세요."),
	star: yup.number().required(),
});

export default medicineReviewPostValidation;
