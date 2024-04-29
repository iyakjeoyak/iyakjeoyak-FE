export interface ReviewType {
	date: string;
	history?: string;
}

export interface ReviewDetail {
	date: string;
	content: string;
	rating: number;
}

export interface SupplementType {
	name: string;
	frequency?: string;
	rating?: number;
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
	introduce: string;
	interests: string[];
	profileImage: string;
	points: number;
	latestReviews: ReviewType[];
	favoriteSupplements: SupplementType[];
}

export interface ReviewTag {
	delivery: string;
	packaging: string;
	expiration: string;
	eating: string;
}

export interface ReviewImage {
	userImage: string;
}

export interface DetailedReview {
	date: string;
	itemName: string;
	content: string;
	category: string;
	reviewLike: number;
	rating: number;
	reviewTag: ReviewTag[];
	reviewImg: ReviewImage[];
}

export interface ReviewData {
	reviews: DetailedReview[];
}

export interface ReviewDisplayProps {
	reviews: DetailedReview[];
}

export interface ShortPointHistory {
	date: string;
	category: string;
}

export interface PointData {
	pointHistory: ShortPointHistory[];
	reviewMockData: ReviewData;
}

export interface SupplementInfo {
	name: string;
	dosage: string;
	dueDate: string;
	effect: string[];
	memo: string;
	img?: string;
}

export interface SupplementRecordData {
	mySupplements: SupplementInfo[];
}

export interface LikedSupplement {
	itemName: string;
	effect: string[];
	liked: boolean;
}

export interface LikeRecordData {
	likedSupplement: LikedSupplement[];
}
