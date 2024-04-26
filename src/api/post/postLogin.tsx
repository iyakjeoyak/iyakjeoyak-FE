import instance from "..";
import { AxiosError, AxiosResponse } from "axios";
import { LoginType } from "@/pages/login/utils/loginValidation";

export default async function postLogin(data: LoginType) {
	try {
		const response: AxiosResponse = await instance.post<LoginType>(
			"/user/login",
			data,
		);
		return response.data;
	} catch (err) {
		if (err instanceof AxiosError) {
			console.error(err);
			return err.response;
		}
	}
}
