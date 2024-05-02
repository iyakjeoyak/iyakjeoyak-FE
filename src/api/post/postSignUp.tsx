import { SignUpFormType } from "@/pages/signup/utils/signupValidation";
import instance from "..";

export default async function postSignUp(data: SignUpFormType) {
	return instance.post("/user", data);
}
