import axios from "../axiosConfig";
import { LoginFormType } from "@/pages/login/utils/loginValidation";

export default async function postLogin(data: LoginFormType) {
	return await axios.post("/users/login", data);
}
