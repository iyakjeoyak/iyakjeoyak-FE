import {
	PointHistory,
	ReviewHistory,
	SupplementHistory,
} from "@/pages/userinfo/UI";
import {
	checkTokenAndRedirectToHome,
	checkTokenAndRedirectToLogin,
} from "./loaders";

import { Fame } from "@/pages/fame";
import { GoogleLogin } from "@/pages/login/UI/GoogleLogin";
import { KakaoLogin } from "@/pages/login/UI/KakaoLogin";
import Layout from "@/components/Layout";
import LoginPage from "@/pages/login";
import MainPage from "@pages/main";
import MedicineDetail from "@/pages/detail";
import MedicineSearch from "@/pages/search";
import OnBoarding from "@/pages/onboarding";
import PharmacyMap from "@/pages/map";
import SignUpPage from "@/pages/signup";
import UserInfo from "@/pages/userinfo";
import { createBrowserRouter } from "react-router-dom";
import { routerpaths } from "@/utils/pathName";
import { SignUpTest } from "@/pages/signupTest/UI/SignUpTest";
// import LikedItem from "@/pages/userinfo/UI/LikedItem/LikedItem";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <section>잘못된 접근입니다</section>,
		children: [
			{ index: true, element: <OnBoarding /> },
			{ path: routerpaths.HOME, element: <MainPage /> },
			{ path: routerpaths.SEARCH, element: <MedicineSearch /> },
			{ path: routerpaths.DETAILIDPAGE, element: <MedicineDetail /> },
			{
				path: routerpaths.LOGIN,
				element: <LoginPage />,
				loader: checkTokenAndRedirectToHome,
			},
			{ path: routerpaths.KAKAOLOGIN, element: <KakaoLogin /> },
			{ path: routerpaths.GOOGLELOGIN, element: <GoogleLogin /> },
			{
				path: routerpaths.SIGNUP,
				element: <SignUpPage />,
				loader: checkTokenAndRedirectToHome,
			},
			{ path: routerpaths.SIGNUPTEST, element: <SignUpTest /> },
			{ path: routerpaths.FAME, element: <Fame /> },
			{
				path: routerpaths.USERINFO,
				element: <UserInfo />,
				loader: checkTokenAndRedirectToLogin,
			},
			{ path: routerpaths.POINTHISTORY, element: <PointHistory /> },
			{ path: routerpaths.REVIEWHISTORY, element: <ReviewHistory /> },
			{ path: routerpaths.SUPPLEMENTHISTORY, element: <SupplementHistory /> },
			// { path: routerpaths.LIKEDITEM, element: <LikedItem /> },
			{ path: routerpaths.MAP, element: <PharmacyMap /> },
		],
	},
]);

export default router;
