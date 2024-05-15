import { countStar } from ".";

describe("getStarRating 함수 테스트 in StarRating", () => {
	test("0.5 단위 평점인 경우", () => {
		expect(countStar(4.5, 5)).toStrictEqual({
			emptyStarsCount: 0,
			fullStarsCount: 4,
			halffilledStar: true,
		});
	});
	test("반올림이면 올림 단위 평점인 경우", () => {
		expect(countStar(3.7, 5)).toStrictEqual({
			emptyStarsCount: 1,
			fullStarsCount: 3,
			halffilledStar: true,
		});
	});
	test("반올림이면내림 단위 평점인 경우", () => {
		expect(countStar(2.2, 5)).toStrictEqual({
			emptyStarsCount: 3,
			fullStarsCount: 2,
			halffilledStar: false,
		});
	});
});
