import { PathButton } from "@/components/PathButton/PathButton";
import { LoginInputForm } from "./UI";

export default function LoginPage() {
	return (
		<section>
			<PathButton paths={[{ text: "로그인", path: "/login" }]} />
			<LoginInputForm />
		</section>
	);
}
