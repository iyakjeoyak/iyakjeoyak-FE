type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

interface FlexBoxProps {
	justify?: string;
	align?: string;
	direction?: FlexDirection;
	wrap?: FlexWrap;
	shrink?: number;
	className?: string;
	children?: React.ReactNode;
}

const FlexBox = ({
	justify = "center",
	align = "center",
	direction = "row",
	wrap = "nowrap",
	shrink = 0,
	className = "",

	children,
}: FlexBoxProps): JSX.Element => {
	const style = {
		display: "flex",
		justifyContent: justify,
		alignItems: align,
		flexDirection: direction as FlexDirection,
		flexWrap: wrap as FlexWrap,
		flexShrink: shrink,
	};

	return (
		<div className={className} style={style}>
			{children}
		</div>
	);
};

export default FlexBox;
