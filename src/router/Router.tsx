import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailIdPage from "@/pages/detailId";
import Layout from "../pages/layout";
import LoginPage from "../pages/login";
import MainPage from "../pages/main";
import SearchPage from "@/pages/search";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/detail/:id" element={<DetailIdPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<section>잘못된 접근입니다</section>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
