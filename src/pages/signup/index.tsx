import { PathButton } from "@/components/PathButton/PathButton";
import { SignUpForm } from "./UI/SignUpForm";

function SignUpPage() {
	return (
		<section>
			<PathButton paths={[{ text: "회원가입", path: "/signup" }]} />
			<SignUpForm />
		</section>
	);
}

export default SignUpPage;
