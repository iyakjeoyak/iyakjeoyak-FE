import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import { SignUp } from "./UI/SignUp";

function SignUpPage() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<SignUp />
		</section>
	);
}

export default SignUpPage;
