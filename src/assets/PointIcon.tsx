import { FC, SVGProps } from "react";

const PointIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || "200"}
			height={props.height || "200"}
			fill="none"
			viewBox="0 0 200 200"
			{...props}
		>
			<path
				fill='url("#SvgjsLinearGradient2960")'
				d="M100 173.738C24.364 236.944-36.944 175.636 26.262 100-36.944 24.364 24.364-36.944 100 26.262c75.621-63.206 136.944-1.898 73.738 73.738 63.206 75.578 1.883 136.944-73.738 73.738Z"
			></path>
			<defs>
				<linearGradient
					gradientTransform="rotate(0 0.5 0.5)"
					id="SvgjsLinearGradient2960"
				>
					<stop
						stop-opacity="1"
						stop-color="rgba(105, 234, 203)"
						offset="0"
					></stop>
					<stop
						stop-opacity="1"
						stop-color="rgba(234, 204, 248)"
						offset="0.5"
					></stop>
					<stop
						stop-opacity="1"
						stop-color="rgba(34, 176, 190)"
						offset="1"
					></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default PointIcon;
