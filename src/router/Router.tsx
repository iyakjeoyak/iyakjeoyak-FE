import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home";
import Layout from "../pages/layout";
import LoginPage from "../pages/login";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
