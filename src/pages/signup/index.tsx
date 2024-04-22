import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import { SignUpForm } from "./UI/SignUpForm";

function SignUp() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<SignUpForm />
		</section>
	);
}

export default SignUp;
