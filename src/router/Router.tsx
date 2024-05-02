import {
	PointHistory,
	ReviewHistory,
	SupplementHistory,
} from "@/pages/userinfo/UI";

import DetailMedicineById from "@/pages/detail";
import { Fame } from "@/pages/fame";
import { GoogleLogin } from "@/pages/login/UI/GoogleLogin";
import { KakaoLogin } from "@/pages/login/UI/KakaoLogin";
import Layout from "@/components/Layout";
import Login from "@pages/login";
import MainPage from "@pages/main";
import MedicineSearch from "@/pages/search";
import OnBoarding from "@/pages/onboarding";
import SignUp from "@/pages/signup";
import UserInfo from "@/pages/userinfo";
import { createBrowserRouter } from "react-router-dom";
import { routerpaths } from "@/utils/pathName";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <section>잘못된 접근입니다</section>,
    children: [
      { index: true, element: <OnBoarding/>},
      { path: routerpaths.HOME, element: <MainPage />  },
      { path: routerpaths.SEARCH, element: <MedicineSearch /> },
      { path: routerpaths.DETAILIDPAGE, element: <DetailMedicineById /> },
      { path: routerpaths.LOGIN, element: <Login />},
       // { path: routerpaths.LOGIN, element: <Login />, loader: checkTokenAndRedirectToHome},
      { path: routerpaths.KAKAOLOGIN, element: <KakaoLogin /> },
      { path: routerpaths.GOOGLELOGIN, element: <GoogleLogin />},
      { path: routerpaths.SIGNUP, element: <SignUp />},
      // { path: routerpaths.SIGNUP, element: <SignUp />, loader: checkTokenAndRedirectToHome },
      { path: routerpaths.FAME, element: <Fame /> },
      { path: routerpaths.USERINFO, element: <UserInfo />  },
      // { path: routerpaths.USERINFO, element: <UserInfo />, loader: checkTokenAndRedirectToLogin  },
      { path: routerpaths.POINTHISTORY, element: <PointHistory /> },
      { path: routerpaths.REVIEWHISTORY, element: <ReviewHistory /> },
      { path: routerpaths.SUPPLEMENTHISTORY, element: <SupplementHistory /> },

    ],
  },
]);

export default router;
