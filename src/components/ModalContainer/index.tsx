import { HTMLMotionProps, motion } from "framer-motion";

import styles from "./index.module.scss";

interface ModalContainerProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode;
	toggleModalOpen: () => void;
	className?: string;
}

export default function ModalContainer({
	children,
	toggleModalOpen,
	className,
	...props
}: ModalContainerProps) {
	return (
		<div className="background" onClick={toggleModalOpen}>
			<motion.div
				{...props}
				className={`{styles.container} ${className || ""}`}
				initial={{ opacity: 0, y: "100%" }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: "100%" }}
				transition={{ duration: 0.3 }}
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<div className={styles.element} />
				{children}
			</motion.div>
		</div>
	);
}
