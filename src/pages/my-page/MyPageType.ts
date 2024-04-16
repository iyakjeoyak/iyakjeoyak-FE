export interface Review {
	date: string;
	history: string;
}

export interface ReviewDetail {
	date: string;
	content: string;
	rating: number;
}

export interface Supplement {
	name: string;
	frequency?: string;
	rating: number;
}

export interface SupplementDetail {
	name: string;
	dosage: string;
	dueDate: string;
	effect: string;
}

export interface SupplementDetail {
	name: string;
	dosage: string;
	dueDate: string;
	effect: string;
}

export interface UserData {
	gender: string;
	age: number;
	nickname: string;
	email: string;
	interests: string[];
	profileImage: string;
	userIntroduce: string;
	points: number;
	latestReviews: Review[];
	favoriteSupplements: Supplement[];
	mySupplements: SupplementDetail[];
	reviews: ReviewDetail[];
}

export interface MyPageBoxProps {
	sectionType: "review" | "supplement";
	reviews?: Review[];
	supplements?: Supplement[];
}
