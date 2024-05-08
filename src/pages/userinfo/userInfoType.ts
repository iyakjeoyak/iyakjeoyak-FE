export interface ReviewType {
	id: number;
	title: string;
	content: string;
	star: number;
	createDate: string;
	modifiedDate: string;
}

export interface SupplementType {
	id: number;
	medicineName: string;
	grade: string;
	expirationDate: string;
}
export interface ReviewDetail {
	date: string;
	content: string;
	rating: number;
}

export interface SupplementDetail {
	name: string;
	dosage: string;
	dueDate: string;
	effect: string;
}

export interface tagResult {
	id: number;
	name: string;
}
export interface UserResult {
	userId: number;
	nickname: string;
	gender: string;
	age: number;
	point?: number;
	introduce?: string;
	hashtagList?: tagResult[];
	image?: imageResult;
}

export interface UserEdit {
	nickname: string;
	gender: string;
	age: number;
	introduce?: string;
	hashtagList: tagResult[];
	image?: imageEdit;
}
export interface UserData {
	userResult: UserResult;
	latestReviews?: ReviewType[];
	favoriteSupplements?: SupplementType[];
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
	prdlst_NM: string;
}

export interface CreateBy {
	userId: number;
	nickname?: "string";
	image?: {
		id: number;
		fullPath: "string";
	};
}

export interface imageResult {
	id: number;
	fullPath: string;
}

export interface imageEdit {
	id: number;
	fullPath?: string | File | null;
}
export interface DetailedReview {
	id: number;
	title: string;
	content: string;
	star: number;
	heartCount: number;
	medicine: Medicine;
	createdBy: CreateBy;
	createdDate: string;
	modifiedDate: string;
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
	changedValue: number;
	pointSum: number;
}

export interface pointResult {
	data: PointProps[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberofElement: number;
}

export interface PointData {
	point: number;
	pageResult: pointResult;
}

export interface ShortSupplementInfo {
	id: number;
	medicineName: string;
	grade: string;
	expirationDate: string;
}

export interface ShortSupplementProps {
	data: ShortSupplementInfo[];
	number: number;
	size: number;
	totalPages: number;
	totalElement: number;
	numberOfElement: number;
}
export interface SupplementSubmmitInfo {
	medicineId: number;
	medicineName: string;
	expirationDate: string;
	memo?: string;
	image?: string;
}

// export interface SupplementRecordData {
// 	mySupplements: SupplementInfo[];
// }

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
