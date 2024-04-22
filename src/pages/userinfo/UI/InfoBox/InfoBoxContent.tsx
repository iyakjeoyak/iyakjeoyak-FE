import { Item, RenderFunction } from "../../InfoBoxType";

interface InfoContentsProps {
	items: Item[];
	renderItem: RenderFunction;
}

const InfoBoxContent = ({ items, renderItem }: InfoContentsProps) => {
	return (
		<div>
			{items.map((item, index) => (
				<div key={index}>{renderItem(item, index)}</div>
			))}
		</div>
	);
};

export default InfoBoxContent;
