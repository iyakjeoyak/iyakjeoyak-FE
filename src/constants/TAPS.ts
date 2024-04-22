export interface TapType {
	label: string;
	value: string;
}

// TODO: enum => 객체 const enum => index
export const enum TAPS_QUERIES {
	ALL = "all",
	FEATURE = "feature",
	FUNCTION = "function",
	INFO = "info",
	REVIEW = "review",
}
