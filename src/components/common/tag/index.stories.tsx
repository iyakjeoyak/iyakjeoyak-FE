import "@styles/global.scss";

import TagCommon from ".";

export default {
	title: "TagCommon",
	component: TagCommon,
};

const Template = () => {
	return (
		<main>
			<div>
				<TagCommon text="Default" />
				<TagCommon text="비타민" size="small" backgroundColor="green" />
				<TagCommon text="아연" size="medium" backgroundColor="white" />
			</div>
		</main>
	);
};

export const Default = Template.bind({});
