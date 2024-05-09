import { countStar } from ".";

describe("getStarRating 함수 테스트 in StarRating", () => {
	it("올바른 채워진 별, 반 별, 빈 별의 수를 객체로 반환한다.", () => {
		const testCases = [
			{
				star: 4.5,
				totalStars: 5,
				expected: { fullStars: 4, halfStar: true, emptyStars: 0 },
			},
			{
				star: 3.7,
				totalStars: 5,
				expected: { fullStars: 3, halfStar: true, emptyStars: 1 },
			},
			{
				star: 2.2,
				totalStars: 5,
				expected: { fullStars: 2, halfStar: false, emptyStars: 3 },
			},
		];

		testCases.forEach((test) => {
			const { star, totalStars, expected } = test;
			const { fullStarsCount, halffilledStar, emptyStarsCount } = countStar(
				star,
				totalStars,
			);

			expect(fullStarsCount).toEqual(expected.fullStars);
			expect(halffilledStar).toEqual(expected.halfStar);
			expect(emptyStarsCount).toEqual(expected.emptyStars);
		});
	});
});
