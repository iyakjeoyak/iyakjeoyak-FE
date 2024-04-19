import { FC, SVGProps } from "react";

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.width || "200"}
			height={props.height || "200"}
			fill="none"
			viewBox="0 0 57 34"
			{...props}
		>
			<path
				fill='url("#SvgjsLinearGradient2050")'
				d="M28.3 31.1c-19.8 6.6-35.8-2.6-24.4-14C-7.5 5.7 8.5-3.5 28.3 3c19.8-6.6 35.8 2.6 24.4 14 11.4 11.4-4.6 20.7-24.4 14.1Z"
			></path>
			<defs>
				<linearGradient
					gradientTransform="rotate(90 0.5 0.5)"
					id="SvgjsLinearGradient2050"
				>
					<stop
						stopOpacity="1"
						stopColor="rgba(35, 204, 135)"
						offset="0.00578125"
					></stop>
					<stop
						stopOpacity="1"
						stopColor="rgba(234, 204, 248)"
						offset="0.48"
					></stop>
					<stop
						stopOpacity="1"
						stopColor="rgba(34, 176, 190)"
						offset="1"
					></stop>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default XIcon;
