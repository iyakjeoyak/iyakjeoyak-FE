import { PathButton } from "@/components/PathButton/PathButton";
import { SignUpForm } from "./UI/SignUpForm";
import { useLocation } from "react-router-dom";

function SignUpPage() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<SignUpForm />
		</section>
	);
}

export default SignUpPage;
