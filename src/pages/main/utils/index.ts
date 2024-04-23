export default function calculateDday(startDate: Date, endDate?: Date | null) {
	if (!endDate) return "유통기한없음";

	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
	const differenceInDays = Math.ceil(
		differenceInMilliseconds / millisecondsPerDay,
	);
	return differenceInDays;
}
