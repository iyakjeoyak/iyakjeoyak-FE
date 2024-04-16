import * as yup from "yup";

import { Form } from "@/components/form";

export default function LoginInputForm() {
	return (
		<div>
			<Form schema={yup.object().shape({})} onSubmit={() => {}}>
				<Form.Input
					name="아이디"
					type="text"
					placeholder="아이디를 입력해주세요."
				></Form.Input>
				<Form.Input
					name="비밀번호"
					type="password"
					placeholder="비밀번호를 입력해주세요."
				></Form.Input>
			</Form>
		</div>
	);
}
