import { PathButton } from "@/components/PathButton/PathButton";
import LoginForm from "./UI/LoginForm";

export default function LoginPage() {
	return (
		<section>
			<PathButton paths={[{ text: "로그인", path: "/login" }]} />
			<LoginForm />
		</section>
	);
}
