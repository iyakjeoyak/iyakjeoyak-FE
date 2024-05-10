import axios from "../axiosConfig";

export default async function postMailVerify({
	username,
	authCode,
}: {
	username: string;
	authCode: string;
}) {
	const response = await axios.post("/mail/verify", {
		email: username,
		authCode: authCode,
	});
	return response.data;
}
