const userImage = "/images/no_profile_image.jpg";
import { UserData } from "./MyPageType";

const mockData: UserData = {
	gender: "female",
	age: 28,
	nickname: "ThisThat",
	email: "jane.doe@example.com",
	interests: ["Running", "Yoga", "Reading", "Traveling"],
	profileImage: userImage,
	userIntroduce: "",
	points: 900,
	latestReviews: [
		{
			date: "2024-04-10",
			history: "후기 작성",
		},
		{
			date: "2024-04-10",
			history: "후기 작성2",
		},
		{
			date: "2024-04-10",
			history: "후기 작성3",
		},
	],

	favoriteSupplements: [
		{
			name: "비타민D",
			frequency: "매일 1회 섭취",
			rating: 3.2,
		},
		{
			name: "비타민D",
			frequency: "매일 1회 섭취",
			rating: 3.2,
		},
		{
			name: "비타민D",
			frequency: "매일 1회 섭취",
			rating: 3.2,
		},
		{
			name: "비타민D",
			frequency: "매일 1회 섭취",
			rating: 3.2,
		},
	],

	mySupplements: [
		{
			name: "비타민D",
			dosage: "1000 IU",
			dueDate: "2025.03.05",
			effect: "감기",
		},

		{
			name: "비타민D",
			dosage: "1000 IU",
			dueDate: "2025.03.05",
			effect: "감기",
		},
	],

	reviews: [
		{
			date: "2024-04-10",
			content: "너무 좋은 제품입니다",
			rating: 4.5,
		},
		{
			date: "2024-04-10",
			content: "너무 좋은 제품입니다",
			rating: 4.5,
		},
		{
			date: "2024-04-10",
			content: "너무 좋은 제품입니다",
			rating: 4.5,
		},
		{
			date: "2024-04-10",
			content: "너무 좋은 제품입니다",
			rating: 4.5,
		},
	],
};

export default mockData;
