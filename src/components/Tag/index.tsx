import styles from "./index.module.scss";

interface TagCommonProps {
	text: string;
	size?: "small" | "medium";
	backgroundColor?: "green" | "midgreen" | "lightgreen" | "white";
	className?: string;
}

const TagCommon: React.FC<TagCommonProps> = ({
	text,
	size = "medium",
	backgroundColor = "default",
	className,
}) => {
	const sizeClass = styles[`tag-${size}`] || "";
	const backgroundClass = styles[`background-${backgroundColor}`] || "";

	return (
		<span className={`${className} ${sizeClass} ${backgroundClass}`}>
			{text}
		</span>
	);
};

export default TagCommon;
