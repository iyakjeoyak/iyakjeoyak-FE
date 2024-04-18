import React from "react";

const ElementIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_229_633)">
				<path
					d="M10 17.3738C2.43642 23.6944 -3.69438 17.5636 2.62622 10C-3.69438 2.43642 2.43642 -3.69438 10 2.62622C17.5621 -3.69438 23.6944 2.43642 17.3738 10C23.6944 17.5578 17.5621 23.6944 10 17.3738Z"
					fill="url(#paint0_linear_229_633)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_229_633"
					x1="0"
					y1="0"
					x2="19.9998"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#23CC87" />
					<stop offset="0.483516" stop-color="#EACCF8" />
					<stop offset="1" stop-color="#39CC23" />
				</linearGradient>
				<clipPath id="clip0_229_633">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default ElementIcon;
