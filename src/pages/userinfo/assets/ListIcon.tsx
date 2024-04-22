import { FC, SVGProps } from "react";

const ListIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			className="w-6 h-6 text-gray-800 dark:text-white"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth="2"
				d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
			/>
		</svg>
	);
};

export default ListIcon;
