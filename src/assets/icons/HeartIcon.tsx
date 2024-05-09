import { SVGProps } from "react";

const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className="text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={props.width}
			height={props.height}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
			/>
		</svg>
	);
};

export default HeartIcon;
