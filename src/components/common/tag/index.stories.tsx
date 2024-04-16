import "@styles/global.scss";

import TagCommon from ".";

export default {
	title: "TagCommon",
	component: TagCommon,
};

export const Default = () => {
	return (
		<div>
			<TagCommon text="Default" />
		</div>
	);
};

export const MediumTag = () => {
	return (
		<div>
			<TagCommon text="아연" size="medium" backgroundColor="white" />
		</div>
	);
};

export const SmallTag = () => {
	return (
		<div>
			<TagCommon text="비타민" size="small" backgroundColor="green" />
		</div>
	);
};
