export function formatHour(time: string) {
	if (time === "off") {
		return "휴무일";
	} else if (time.length === 4) {
		return `${time.slice(0, 2)}:${time.slice(2)}`;
	}
	return time;
}
