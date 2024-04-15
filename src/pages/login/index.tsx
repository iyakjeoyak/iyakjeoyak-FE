import { Form } from "../../components/common/form";
import * as yup from "yup";

export default function LoginPage() {
	return (
		<section>
			로그인 페이지입니다.
			<Form schema={yup.object().shape({})} onSubmit={() => {}}>
				<Form.Input name="아이디" type="text"></Form.Input>
			</Form>
		</section>
	);
}
