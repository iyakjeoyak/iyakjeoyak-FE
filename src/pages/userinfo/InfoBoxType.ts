export interface Review {
	date: string;
	history?: string;
}

export interface Supplement {
	name: string;
	rating?: number;
	frequency?: string;
}

export interface SectionConfig {
	[key: string]: {
		title: string;
		navigateTo: string;
		getData: (data: Item[]) => Item[];
	};
}

export type Item = Review | Supplement;

export interface RenderFunction {
	(item: Item, index: number): JSX.Element;
}
