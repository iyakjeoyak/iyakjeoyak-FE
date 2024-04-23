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
	title: yup.string().required(),
	content: yup.string().min(50).required(),
});

export default medicineReviewPostValidation;
