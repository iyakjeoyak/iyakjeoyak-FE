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
import { ToastContainer } from "react-toastify";
import { createPortal } from "react-dom";
import { showToast } from "./utils/ToastConfig.ts";

// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 0,
			gcTime: 0,
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

const Toast = () => {
	return createPortal(
		<ToastContainer />,
		document.getElementById("toast-root")!,
	);
};

ReactDOM.createRoot(document.getElementById("app-root")!).render(
	<React.StrictMode>
		<ErrorBoundary FallbackComponent={Error}>
			<Suspense fallback={<Loading isFullLoading />}>
				<QueryClientProvider client={queryClient}>
					<App />
					<Toast />
					{/* <ReactQueryDevtools initialIsOpen={false} position="bottom" /> */}
				</QueryClientProvider>
			</Suspense>
		</ErrorBoundary>
	</React.StrictMode>,
);
