import instance from "..";
import { LoginFormType } from "@/pages/login/utils/loginValidation";

export default function postLogin(data: LoginFormType) {
	return instance.post("/user/login", data);
}
