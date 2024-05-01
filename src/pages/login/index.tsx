import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import Login from "./UI/Login";

function LoginPage() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<Login />
		</section>
	);
}

export default LoginPage;