import { FC, SVGProps } from "react";

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="200"
			height="200"
			fill="none"
			viewBox="0 0 57 34"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns-svgjs="http://svgjs.dev/svgjs"
			{...props}
		>
			<path
				fill='url("#SvgjsLinearGradient2178")'
				d="M28.3 31.1c-19.8 6.6-35.8-2.6-24.4-14C-7.5 5.7 8.5-3.5 28.3 3c19.8-6.6 35.8 2.6 24.4 14 11.4 11.4-4.6 20.7-24.4 14.1Z"
			></path>
			<defs>
				<linearGradient
					gradientTransform="rotate(90 0.5 0.5)"
					id="SvgjsLinearGradient2178"
				>
					<stop
						stopOpacity=" 1"
						stopColor="rgba(35, 204, 135)"
						offset="0"
					></stop>
					<stop
						stopOpacity=" 1"
						stopColor="rgba(234, 204, 248)"
						offset="0.726690673828125"
					></stop>
					<stop
						stopOpacity=" 1"
						stopColor="rgba(118, 100, 255)"
						offset="1"
					></stop>
				</linearGradient>
				<filter id="shadow" x="0%" y="0%">
					<feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="lightgray" />
				</filter>
			</defs>
			<path
				fill='url("#SvgjsLinearGradient2178")'
				d="M28.3 31.1c-19.8 6.6-35.8-2.6-24.4-14C-7.5 5.7 8.5-3.5 28.3 3c19.8-6.6 35.8 2.6 24.4 14 11.4 11.4-4.6 20.7-24.4 14.1Z"
				filter="url(#shadow)"
			></path>
		</svg>
	);
};

export default XIcon;
