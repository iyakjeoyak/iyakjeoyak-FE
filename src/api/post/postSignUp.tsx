import { SignUpFormType } from "@/pages/signup/utils/signupValidation";
import  { axiosImg } from "../axiosConfig";

export default async function postSignUp(data: SignUpFormType) {
	return axiosImg.post("/user", data);
}
