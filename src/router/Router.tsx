import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailIdPage from "@/pages/detail";
import Layout from "@pages/layout";
import LoginPage from "@pages/login";
import MainPage from "@pages/main";
import SearchPage from "@/pages/search";
import MyPage from "@/pages/my-page";
import SignUpPage from "@/pages/signup";
import OnBoarding from "@/pages/onboarding";
import { Fame } from "@/pages/fame";
import { PointHistory, ReviewHistory } from "@/pages/my-page/UI";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/home" element={<OnBoarding />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/detail/:id" element={<DetailIdPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/my-page" element={<MyPage />} />
					<Route path="/fame" element={<Fame />} />
					<Route path="/my-page/point" element={<PointHistory />} />
					<Route path="/my-page/review" element={<ReviewHistory />} />

					<Route path="*" element={<section>잘못된 접근입니다</section>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
