import { SignUpType } from "@/pages/signup/utils/signupValidation";
import instance from "..";
import { AxiosError, AxiosResponse } from "axios";

export default async function postSignUp(data: SignUpType) {
	try {
		const response: AxiosResponse = await instance.post<SignUpType>(
			"http://54.180.121.206:8080/user",
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
