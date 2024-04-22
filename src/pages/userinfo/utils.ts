import {
	RenderFunction,
	SectionConfig,
	Item,
	Review,
	Supplement,
} from "./InfoBoxType";
import { renderReview, renderSupplement } from "./UI/InfoBox/InfoBoxItem";

export const renderFunctions: { [key: string]: RenderFunction } = {
	review: renderReview,
	supplement: renderSupplement,
};

export const sectionConfig: SectionConfig = {
	review: {
		title: "작성한 후기",
		navigateTo: "/userinfo/review",
		getData: (data: Item[]): Item[] => {
			return data.filter((item) => "date" in item) as Review[];
		},
	},
	supplement: {
		title: "내 영양제",
		navigateTo: "/userinfo/user-supplement",
		getData: (data: Item[]): Item[] => {
			return data.filter((item) => "name" in item) as Supplement[];
		},
	},
};
