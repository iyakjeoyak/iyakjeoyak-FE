import { MouseEventHandler } from "react";
import style from "../style/commoncardbox.module.scss";
import PlusIcon from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";
import UserCardInfo from "./UserCardInfo";
import LikedCardInfo from "./LikedItem/LikedCardInfo";

interface CardProps {
	name?: string;
	title?: string;
	date?: string;
	img?: string;
	liked?: boolean;
	memo?: string;
	likedEffect?: string[];
	effect?: string[];
	form?: "slim" | "wide" | "empty";
	onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

const CommonCardBox = ({
	img,
	name,
	form = "slim",
	onClick,
	...props
}: CardProps) => {
	const cardStyle = `${style.card} ${style[form]}`;

	const renderCardContent = () => {
		if (name && img) {
			return <img src={img} className={style.cardImage} />;
		} else if (name) {
			return (
				<img src={`/images/no_medicine_img.jpg`} className={style.cardImage} />
			);
		} else {
			return (
				<Button
					icon={<PlusIcon />}
					onClick={() => console.log("모냐")}
					variant="greentransparent"
					size="l"
				/>
			);
		}
	};

	return (
		<div className={cardStyle} onClick={onClick}>
			{renderCardContent()}

			<UserCardInfo {...props} />
			<LikedCardInfo {...props} likedEffect={props.likedEffect} />
		</div>
	);
};

export default CommonCardBox;
