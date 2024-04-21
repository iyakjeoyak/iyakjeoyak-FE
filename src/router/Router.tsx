import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routerpaths } from "@/utils/pathName";
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
	SupplementHistory,
} from "@/pages/userinfo/UI";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={routerpaths.HOME} element={<MainPage />} />
					<Route path={routerpaths.ONBOARDING} element={<OnBoarding />} />
					<Route path={routerpaths.SEARCH} element={<SearchPage />} />
					<Route path={routerpaths.DETAILIDPAGE} element={<DetailIdPage />} />
					<Route path={routerpaths.LOGIN} element={<LoginPage />} />
					<Route path={routerpaths.SIGNUP} element={<SignUpPage />} />
					<Route path={routerpaths.FAME} element={<Fame />} />
					<Route path={routerpaths.USERINFO} element={<UserInfo />} />
					<Route path={routerpaths.POINTHISTORY} element={<PointHistory />} />
					<Route path={routerpaths.REVIEWHISTORY} element={<ReviewHistory />} />
					<Route
						path={routerpaths.SUPPLEMENTHISTORY}
						element={<SupplementHistory />}
					/>
					<Route path="*" element={<section>잘못된 접근입니다</section>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
