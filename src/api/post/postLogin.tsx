import axios from "../axiosConfig";
import { LoginFormType } from "@/pages/login/utils/loginValidation";

export default function postLogin(data: LoginFormType) {
	return axios.post("/user/login", data);
}