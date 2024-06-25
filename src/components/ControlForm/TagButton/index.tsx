import styles from "./index.module.scss";
import { useState } from "react";

interface TagButtonProps {
	text: string;
	size?: "small" | "medium";
	backgroundColor?: "green" | "midgreen" | "lightgreen" | "white";
	value?: number;
	defaultIsSelected?: boolean;
	onClick?: () => void;
}

const TagButton = ({
	text,
	size = "medium",
	backgroundColor = "white",
	value,
	defaultIsSelected = false,
	onClick,
}: TagButtonProps) => {
	const [selected, setSelected] = useState(defaultIsSelected);
	const sizeClass = styles[`tag-${size}`] || "";
	const backgroundClass = styles[`background-${backgroundColor}`] || "";

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
		setSelected((prev) => !prev);
	};

	return (
		<span
			className={`${sizeClass} ${backgroundClass} ${selected ? styles.selected : ""}`}
			onClick={handleClick}
		>
			{text}
			<input type="hidden" value={value} />
		</span>
	);
};

export default TagButton;
