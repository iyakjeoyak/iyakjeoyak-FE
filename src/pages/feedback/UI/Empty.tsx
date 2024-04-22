import { ReactNode } from "react";
import XIcon from "@/assets/icons/XIcon";
import style from "../styles/empty.module.scss";

interface EmptyProps {
	description: string;
	children?: ReactNode;
}

const Empty = ({ description, children }: EmptyProps) => {
	const iconCount = 3;
	const icons = Array.from({ length: iconCount }, (_, index) => (
		<XIcon key={index} width="50rem" height="60rem" />
	));

	return (
		<section className={style.emptyContainer}>
			<div className={style.emptyContent}>
				<div className={style.iconContainer}>{icons}</div>
				<div className={style.emptyTitle}>{description}</div>
				{children}
			</div>
		</section>
	);
};

export default Empty;
