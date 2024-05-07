import axios from "../axiosConfig";

// const userInfoEdit = {
// 	gender: "FEMALE",
// 	introduce: "어쩌구",
// 	nickname: "그런가",
// 	age: "몰라여",
// 	hashtagResultList: [
// 		{
// 			id: 3,
// 			name: "ㅇㄹ어",
// 		},
// 	],
// 	image: null,
// };

export default async function patchUserInfo(userInfo: FormData) {
	try {
		const response = await axios.patch(`/user`, userInfo, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		console.log(response);
		return response.data;
	} catch (error) {
		console.error("API request failed:", error);
		throw error;
	}
}
