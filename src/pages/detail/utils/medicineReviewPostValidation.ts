import * as yup from "yup";

export interface MedicineReviewPostBodyType {
	// medicineId: 0,
	title: string;
	content: string;
	// star: 0,
	// img: [],
	// tags: [],
}

export const initialMedicineReviewPostBody = {
	// medicineId: 0,
	title: "",
	content: "",
	// star: 0,
	// img: [],
	// tags: [],
};

const medicineReviewPostValidation = yup.object().shape({
	title: yup.string().required("영양제 리뷰 제목을 작성해주세요."),
	content: yup
		.string()
		.min(50, "50자 이상의 후기를 입력해주세요")
		.required("영양제 리뷰를 작성해주세요"),
});

export default medicineReviewPostValidation;
