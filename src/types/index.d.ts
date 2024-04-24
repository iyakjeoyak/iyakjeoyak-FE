export interface MedicineItemType {
	id: number; // DB ID
	name: string; // 영양제명=> prdlst_NM
	tags: string[]; // 해시 태그 모음
	starAvg: number; // 평균 평점
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
	review: string;
}
