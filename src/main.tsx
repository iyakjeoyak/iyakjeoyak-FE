import "react-toastify/dist/ReactToastify.css";

import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import React, { Suspense } from "react";

import App from "./App.tsx";
import Error from "@pages/feedback/UI/Error.tsx";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./pages/feedback/Loading.tsx";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { showToast } from "./utils/ToastConfig.ts";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 0,
      gcTime:0,
		},
		mutations: {},
	},
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (!query.meta?.ignoreToast) {
				showToast({ type: "error", message: error.message });
			}
		},
	}),
	// mutationCache: new MutationCache({
	// 	onError: (error, mutation: Mutation) => {
	// 		if (!mutation.meta?.ignoreToast) {
	// 			showToast({ type: "error", message: error.message });
	// 		}
	// 	},
	// }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={Error}>
			<Suspense fallback={<Loading />}>
				<QueryClientProvider client={queryClient}>
					<App />
					<ToastContainer />
					<ReactQueryDevtools initialIsOpen={false} position="bottom" />;
				</QueryClientProvider>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>,
);
