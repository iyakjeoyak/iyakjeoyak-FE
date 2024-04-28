import { ToastPosition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastOptions = {
	position?: ToastPosition;
	autoClose?: number;
	hideProgressBar?: boolean;
	closeOnClick?: boolean;
	pauseOnHover?: boolean;
	draggable?: boolean;
	progress?: number;
};

interface ToastProps {
	type: "success" | "error" | "info";
	message?: string;
}

// showToast('type', message)로 토스트 메시지 띄움
export const showToast = ({ type, message }: ToastProps) => {
	const toastOptions: ToastOptions = {
		position: "top-center",
		autoClose: 2000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: 10,
	};

	if (type === "success") {
		toast.success(message, toastOptions);
	}
	if (type === "error") {
		toast.error(message, toastOptions);
	}
	if (type === "info") {
		toast.info(message, { ...toastOptions, icon: false });
	}
};
