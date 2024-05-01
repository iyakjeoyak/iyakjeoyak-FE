import "@styles/_reset.scss";
import "@styles/global.scss";

import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
	return <RouterProvider router={router} />
}

export default App;
