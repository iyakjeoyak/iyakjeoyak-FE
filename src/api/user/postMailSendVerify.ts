import axios from "../axiosConfig";

export default async function postMailSendVerify({
	username,
}: {
	username: string;
}) {
	const response = await axios.post("/mails/send/verify", { email: username });
	return response.data;
}
