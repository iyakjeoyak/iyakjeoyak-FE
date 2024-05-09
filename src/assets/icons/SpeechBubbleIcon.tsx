import { FC, SVGProps } from "react";

const SpeechBubbleIcon: FC<
	SVGProps<SVGSVGElement> & { text: string; color?: string }
> = ({ text, color = "#333", ...props }) => {
	return (
		<svg
			width="124"
			height="50"
			viewBox="0 0 124 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#filter0_d_469_886)">
				<path
					d="M116 23.2258C116 33.0422 108.042 41 98.2258 41L18.7945 41C8.59468 41 1.81185 30.4509 6.04482 21.171L8.77534 15.1848C9.51442 13.5645 9.1884 11.6572 7.95311 10.3744C4.89409 7.19771 7.97458 2.01292 12.2273 3.18045L19.6608 5.22121C20.2177 5.37412 20.7927 5.45161 21.3703 5.45161L98.2258 5.45161C108.042 5.45161 116 13.4094 116 23.2258Z"
					fill="white"
				/>
				<path
					d="M115.5 23.2258C115.5 32.7661 107.766 40.5 98.2258 40.5L18.7945 40.5C8.95861 40.5 2.41779 30.3273 6.49973 21.3785L9.23026 15.3923C10.0545 13.5853 9.69091 11.4582 8.31327 10.0276C5.60675 7.21695 8.33227 2.62962 12.0949 3.66261L19.5284 5.70337C20.1285 5.86812 20.748 5.95161 21.3703 5.95161L98.2258 5.95161C107.766 5.95161 115.5 13.6855 115.5 23.2258Z"
					stroke="#D9D9D9"
					strokeOpacity="0.24"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_469_886"
					x="0.764771"
					y="0.0124512"
					width="123.235"
					height="49.9875"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="2" dy="3" />
					<feGaussianBlur stdDeviation="3" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.8 0 0 0 0 0.811765 0 0 0 0 0.843137 0 0 0 0.73 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_469_886"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_469_886"
						result="shape"
					/>
				</filter>
			</defs>
			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fill={color}
			>
				{text}
			</text>
		</svg>
	);
};
export default SpeechBubbleIcon;
