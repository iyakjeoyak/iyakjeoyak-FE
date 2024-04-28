import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";

import {
	PointHistory,
	ReviewHistory,
	SupplementHistory,
} from "@/pages/userinfo/UI";

import DetailMedicineById from "@/pages/detail";
import { Fame } from "@/pages/fame";
import Layout from "@/components/Layout";
import LoginPage from "@pages/login";
import MainPage from "@pages/main";
import MedicineSearch from "@/pages/search";
import OnBoarding from "@/pages/onboarding";
import SignUp from "@/pages/signup";
import UserInfo from "@/pages/userinfo";
import { routerpaths } from "@/utils/pathName";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<Layout />}
					errorElement={<section>잘못된 접근입니다</section>}
				>
					<Route path={routerpaths.HOME} element={<MainPage />} />
					<Route path={routerpaths.ONBOARDING} element={<OnBoarding />} />
					<Route path={routerpaths.SEARCH} element={<MedicineSearch />} />
					<Route
						path={routerpaths.DETAILIDPAGE}
						element={<DetailMedicineById />}
					/>
					<Route path={routerpaths.LOGIN} element={<LoginPage />} />
					<Route path={routerpaths.SIGNUP} element={<SignUp />} />
					<Route path={routerpaths.FAME} element={<Fame />} />
					<Route path={routerpaths.USERINFO} element={<UserInfo />} />
					<Route path={routerpaths.POINTHISTORY} element={<PointHistory />} />
					<Route path={routerpaths.REVIEWHISTORY} element={<ReviewHistory />} />
					<Route
						path={routerpaths.SUPPLEMENTHISTORY}
						element={<SupplementHistory />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
