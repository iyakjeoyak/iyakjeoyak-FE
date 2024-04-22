import { sectionConfig, renderFunctions } from "../utils";
import InfoBox from "./InfoBox";
import { Item } from "../InfoBoxType";

export interface InfoBoxProps {
	sectionType: string;
	data?: Item[];
}

const UserInfoContent = ({ sectionType, data }: InfoBoxProps) => {
	const config = sectionConfig[sectionType];
	const items = config.getData(data ?? []);
	const { title, navigateTo } = config;
	const renderItem = renderFunctions[sectionType];

	return (
		<InfoBox>
			<InfoBox.Header
				title={title}
				navigateTo={navigateTo}
				navigateButton={true}
			/>
			<InfoBox.Content items={items} renderItem={renderItem} />
		</InfoBox>
	);
};

export default UserInfoContent;
