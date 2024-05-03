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
	reviewId: number;
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
	mySupplementId: number;
	name: string;
	dueDate: string;
	dosage?: string;
	effect?: string[];
	memo?: string;
	img?: string;
}

export interface SupplementRecordData {
	mySupplements: SupplementInfo[];
}

export interface LikedSupplement {
	likedItemId: number;
	itemName: string;
	likedEffect: string[];
	liked: boolean;
	img: string;
}

export interface LikeRecordData {
	likedSupplement: LikedSupplement[];
}
