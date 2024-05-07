export default function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	};

	return new Intl.DateTimeFormat("ko-KR", options)
		.format(date)
		.replace(/\//g, ".");
}
