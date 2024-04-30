import { SignUpFormType } from "@/pages/signup/utils/signupValidation";
import axios from "../axiosConfig";

export default async function postSignUp(data: SignUpFormType) {
	return axios.post("/user", data);
}
