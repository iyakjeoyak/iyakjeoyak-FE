import axios from "../axiosConfig";
import { UserData } from "@/pages/userinfo/userInfoType";

export default async function getUserInfo() {
	const response = await axios.get<UserData>(`/my/user`);
	return response.data;
}
