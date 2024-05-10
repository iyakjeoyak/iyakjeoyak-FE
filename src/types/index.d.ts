export interface RequestPagenation {
	page: number;
	size: number;
}

export interface ResponsePagenation<T> {
	data: T[];
	number: 0;
	size: 0;
	totalPages: 0;
	totalElement: 0;
	numberOfElement: 0;
}

interface TagType {
	id: number;
	name: string;
}
export interface MedicineItemType {
	id: number; // DB ID
	prdlst_NM: string; // 영양제명=> prdlst_NM
	heartCount: number;
	ntk_MTHD: string; // 먹는 방법   "1일 1회, 1회 1정을 물과 함께 섭취하십시오.",
	iftkn_ATNT_MATR_CN: string; // 주의 사항  "이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것"
	grade: number; // 리뷰 평점
	hashtags: TagType[]; // 해시 태그 모음
	reviewCount: number; // 후기 수
	image: ImageType;
}

export interface MedicineDetailItemType extends MedicineItemType {
	bssh_NM: string; // 브랜드명 => bssh_NM
	primary_FNCLTY: string; // 추천 대상 or 기타 설명
	indiv_RAWMTRL_NM: string; // 함량 성분
	ntk_MTHD: string; // 복용 방법 & 시간
	isBookMark: boolean; // 북마크 중인가
	isHeart: boolean; // 좋아요 중인가
	reviewList: string[];
}

export interface ReviewWriterType {
	userId: number;
	nickname: string;
	image: ImageType;
}

export interface ImageType {
	id: number;
	fullPath: string;
}
export interface ReviewItemType {
	id: number;
	title: string;
	content: string;
	star: number;
	heartCount: number;
	createdBy: ReviewWriterType;
	createdDate: string;
	modifiedDate: string;
	hashtagResult: TagType[];
	imageResult: ImageType[];
	isOwner: boolean;
}
