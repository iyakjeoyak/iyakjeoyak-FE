import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailIdPage from "@/pages/detail";
import Layout from "@/components/Layout";
import LoginPage from "@pages/login";
import MainPage from "@pages/main";

import SearchPage from "@/pages/search";
import UserInfo from "@/pages/userinfo";
import SignUpPage from "@/pages/signup";
import OnBoarding from "@/pages/onboarding";
import { Fame } from "@/pages/fame";
import {
	PointHistory,
	ReviewHistory,
	// SupplementHistory,
} from "@/pages/userinfo/UI";

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
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/fame" element={<Fame />} />
					<Route path="/userinfo" element={<UserInfo />} />
					<Route path="/userinfo/point" element={<PointHistory />} />
					<Route path="/userinfo/review" element={<ReviewHistory />} />
					{/* <Route
						path="/userinfo/user-supplement"
						element={<SupplementHistory />}
					/> */}
					<Route path="*" element={<section>잘못된 접근입니다</section>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
