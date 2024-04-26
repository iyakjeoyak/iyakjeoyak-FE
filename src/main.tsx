import App from "./App.tsx";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@pages/feedback/UI/Error.tsx";
import Loading from "./pages/feedback/Loading.tsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 5000,
		},
		mutations: {},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={Error}>
			<Suspense fallback={<Loading />}>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools initialIsOpen={false} position="bottom" />;
				</QueryClientProvider>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>,
);
