import { MouseEventHandler } from "react";
import style from "../style/commoncardbox.module.scss";
import PlusIcon from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";
import UserCardInfo from "./UserCardInfo";

interface CardProps {
	title?: string;
	date?: string;
	img?: string;
	memo?: string;
	tagText?: string;
	form?: "slim" | "wide" | "empty";
	onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

const CommonCardBox: React.FC<CardProps> = ({
	img,
	form = "slim",
	onClick,
	...UserCardInfoProps
}) => {
	const cardStyle = `${style.card} ${style[form]}`;

	return (
		<div className={cardStyle} onClick={onClick}>
			{img ? (
				<img src={img} className={style.cardImage} />
			) : (
				<Button
					icon={<PlusIcon />}
					onClick={() => console.log("모냐")}
					variant="greentransparent"
					size="l"
				/>
			)}

			<UserCardInfo {...UserCardInfoProps} />
		</div>
	);
};

export default CommonCardBox;
