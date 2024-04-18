import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PointHistory, ReviewHistory } from "@/pages/my-page/UI";

import DetailIdPage from "@/pages/detail";
import { Fame } from "@/pages/fame";
import Layout from "@/components/Layout";
import LoginPage from "@pages/login";
import MainPage from "@pages/main";
import MyPage from "@/pages/my-page";
import OnBoarding from "@/pages/onboarding";
import SearchPage from "@/pages/search";
import { SignUpFormTest } from "@/pages/signup/UI/SignUpFormTest";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/home" element={<MainPage />} />
					<Route path="/" element={<OnBoarding />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/detail/:id" element={<DetailIdPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpFormTest />} />
					<Route path="/fame" element={<Fame />} />
					<Route path="/my-page" element={<MyPage />} />
					<Route path="/my-page/point" element={<PointHistory />} />
					<Route path="/my-page/review" element={<ReviewHistory />} />
					<Route path="*" element={<section>잘못된 접근입니다</section>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
