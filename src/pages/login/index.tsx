import { PathButton } from "@/components/PathButton/PathButton";
import { useLocation } from "react-router-dom";
import Login from "./UI/Login";
import styles from "@/pages/login/styles/Login.module.scss";

function LoginPage() {
	const location = useLocation();
	const paths = [location.pathname];
	return (
		<section className={styles.loginContainer}>
			<PathButton paths={paths} />
			<Login />
		</section>
	);
}

export default LoginPage;
