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

export interface Medicine {
	id: number;
	prodlst_NM: string;
}

export interface CreateBy {
	userId: number;
	nickname?: "string";
	image?: {
		id: number;
		fullPath: "string";
	};
}

export interface tagResult {
	id: number;
	name: string;
}

export interface imageResult {
	id: number;
	fullPath: string;
}
export interface DetailedReview {
	id: number;
	title: string;
	content: string;
	star: number;
	heartCount: number;
	medicine: Medicine;
	createdBy: CreateBy;
	modifiedDate: string;
	createdDate: string;
	hashtagResult?: tagResult[];
	imageResult: imageResult[];
}

export interface ReviewData {
	data: DetailedReview[];
	number: number;
	numberOfElement: number;
	size: number;
	totalElement: number;
	totalPages: number;
}

export interface ReviewDisplayProps {
	reviews: DetailedReview[];
}

export interface ShortPointHistory {
	date: string;
	category: string;
}

export interface PointProps {
	id: number;
	domain: string;
	changeValue: number;
	pointSum: number;
}

export interface PointData {
	data: PointProps[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberofElement: number;
}

export interface ShortSupplementInfo {
	id: number;
	medicineName: string;
	expirationDate: string;
}

export interface ShortSupplementProps {
	data: ShortSupplementInfo;
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
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
