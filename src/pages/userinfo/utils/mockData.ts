const itemImage = "/images/Medicine.png?.url";

import { LikeRecordData, SupplementRecordData } from "../userInfoType";

export const supplementRecords: SupplementRecordData = {
	mySupplements: [
		{
			mySupplementId: 1,
			name: "비타민D",
			dosage: "1000 IU",
			dueDate: "2025.03.05",
			effect: ["머가 바뀌니"],
			memo: "1일 3회 복용",
			img: itemImage,
		},

		{
			mySupplementId: 2,
			name: "머땜시",
			dosage: "1000  IU",
			dueDate: "2025.03.05",
			effect: ["테ㅡㅅ트"],
			memo: "아침 저녁 복용",
			img: itemImage,
		},
	],
};

export const likeRecordMockData: LikeRecordData = {
	likedSupplement: [
		{
			likedItemId: 1,
			itemName: "영양제1",
			likedEffect: ["그게"],
			liked: true,
			img: itemImage,
		},
		{
			likedItemId: 2,
			itemName: "영양제2",
			likedEffect: ["감기라고해야하나어쩌구", "아무래도 그런듯"],
			liked: true,
			img: itemImage,
		},
	],
};
