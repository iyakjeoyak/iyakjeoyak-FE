import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			retryDelay: 0,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		,
	</QueryClientProvider>,
);
