export interface RequestPagenation {
	page: number;
	size: number;
}

export interface ResponsePagenation<T> {
	data: [{}];
	number: 0;
	size: 0;
	totalPages: 0;
	totalElement: 0;
	numberOfElement: 0;
}

export interface MedicineItemType {
	id: number; // DB ID
	prdlst_NM: string; // 영양제명=> prdlst_NM
	heartCount: number;
	ntk_MTHD: string; // 먹는 방법   "1일 1회, 1회 1정을 물과 함께 섭취하십시오.",
	iftkn_ATNT_MATR_CN: string; // 주의 사항  "이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것"
	garde: number; // 리뷰 평점
	tags: string[]; // 해시 태그 모음
	reviewCount: number; // 후기 수
}

export interface MedicineDetailItemType extends MedicineItemType {
	brand: string; // 브랜드명 => bssh_NM
	detailDescription: string; // 추천 대상 or 기타 설명
	detailIngredient: string; // 함량 성분
	detailMethod: string; // 복용 방법 & 시간
}

interface ReviewItemType {
	userName: string; // 작성자
	userId: number; // 작성자 id
	date: Date; // 작성 날짜
	star: number; // 별점
	imgUrl: string; // 이미지URL
	description: string; // 리뷰 설명
	tags: string[]; // 태그 모음
}

export interface ReviewItemType {
	id: number;
	title: string;
	content: string;
	star: number;
	heartCount: number;
}
