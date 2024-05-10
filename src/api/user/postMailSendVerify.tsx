import axios from "../axiosConfig";

export default async function postMailSendVerify({
	username,
}: {
	username: string;
}) {
	const response = await axios.post("/mail/send/verify", { email: username });
	return response.data;
}
