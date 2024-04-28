import App from "./App.tsx";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
	MutationCache,
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@pages/feedback/UI/Error.tsx";
import Loading from "./pages/feedback/Loading.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "./utils/ToastConfig.ts";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 5000,
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
	mutationCache: new MutationCache({
		onError: (error, request, context, mutation) => {
			if (!mutation.meta?.ignoreToast) {
				showToast({ type: "error", message: error.message });
			}
		},
	}),
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
