import { Form } from ".";
import * as yup from "yup";

export default {
	title: "Form",
	component: Form,
};

const Template = () => {
	return (
		<Form schema={yup.object().shape({})} onSubmit={() => {}}>
			<Form.Input
				name="name"
				type="text"
				placeholder="placeholder"
			></Form.Input>
		</Form>
	);
};

export const Default = Template.bind({});
