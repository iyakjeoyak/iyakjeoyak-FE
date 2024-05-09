import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import { SignUpTest } from "./UI/SignUpTest";

function SignUpPageTest() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<SignUpTest />
		</section>
	);
}

export default SignUpPageTest;
