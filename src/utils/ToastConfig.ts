import "react-toastify/dist/ReactToastify.css";

import { ToastPosition, toast } from "react-toastify";

type ToastOptions = {
	position?: ToastPosition;
	autoClose?: number;
	hideProgressBar?: boolean;
	closeOnClick?: boolean;
	pauseOnHover?: boolean;
	draggable?: boolean;
	progress?: number;
};

interface ToastProps extends ToastOptions {
	type: "success" | "error" | "info";
	message?: string;
}

// showToast('type', message)로 토스트 메시지 띄움
export const showToast = ({ type, message, ...props }: ToastProps) => {
	const toastOptions: ToastOptions = {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		// draggable: true,
		// progress: 10,
	};

	if (type === "success") {
		toast.success(message, { ...toastOptions, ...props });
	}
	if (type === "error") {
		toast.error(message, { ...toastOptions, ...props });
	}
	if (type === "info") {
		toast.info(message, { ...toastOptions, icon: false });
	}
};
