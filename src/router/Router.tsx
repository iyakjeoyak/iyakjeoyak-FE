import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/login";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<main>홈페이지입니다</main>} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
