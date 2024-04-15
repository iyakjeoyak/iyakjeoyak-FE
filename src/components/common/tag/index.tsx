import styles from "./index.module.scss";

interface TagCommonProps {
	text: string;
	size?: "small" | "medium";
	backgroundColor?: "green" | "midgreen" | "lightgreen" | "white";
}

const TagCommon: React.FC<TagCommonProps> = ({
	text,
	size = "medium",
	backgroundColor = "default",
}) => {
	const sizeClass = styles[`tag-${size}`] || "";
	const backgroundClass = styles[`background-${backgroundColor}`] || "";

	return <span className={`${sizeClass} ${backgroundClass}`}>{text}</span>;
};

export default TagCommon;
