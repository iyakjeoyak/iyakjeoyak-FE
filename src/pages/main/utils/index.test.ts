import calculateDday from "@/utils/calculateDday";

describe("나의 영양제 디데이 계산 테스트", () => {
	test("유통기한이 미래 시점인 경우", () => {
		const startDate = new Date("2024-04-23");
		const endDate = new Date("2024-04-28");
		const expectedDifference = 5;

		const difference = calculateDday(startDate, endDate);

		expect(difference).toBe(expectedDifference);
	});

	test("유통기한이 과거 시점인 경우", () => {
		const startDate = new Date("2024-04-23");
		const endDate = new Date("2024-04-18");
		const expectedDifference = -5;

		const difference = calculateDday(startDate, endDate);

		expect(difference).toBe(expectedDifference);
	});

	test("유통기한이 없는 경우", () => {
		const startDate = new Date("2024-04-23");
		const endDate = null;
		const expectedDifference = "유통기한없음";

		const difference = calculateDday(startDate, endDate);

		expect(difference).toBe(expectedDifference);
	});
});
