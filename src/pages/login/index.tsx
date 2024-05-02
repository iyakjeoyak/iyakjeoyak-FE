import { PathButton } from "@/components/PathButton/PathButton";
import LoginForm from "./UI/LoginForm";
import { useLocation } from "react-router-dom";

export default function Login() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section>
			<PathButton paths={paths} />
			<LoginForm />
		</section>
	);
}
