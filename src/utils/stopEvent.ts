/**
 * 이벤트 버블링 방지 함수
 * @param "all" | "propagation"
 */

export const stopEvent =
	(type: "all" | "propagation" = "all") =>
	(e: React.MouseEvent) => {
		if (type === "all") {
			e.stopPropagation();
			e.preventDefault();
		}
		if (type === "propagation") {
			e.stopPropagation();
		}
	};

export default stopEvent;
