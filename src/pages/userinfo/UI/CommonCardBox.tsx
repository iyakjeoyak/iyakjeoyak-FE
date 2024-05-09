import { MouseEventHandler } from "react";
import style from "../style/commoncardbox.module.scss";
import PlusIcon from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";
import UserCardInfo from "./UserCardInfo";
import LikedCardInfo from "./LikedItem/LikedCardInfo";

interface CardProps {
	likedItemName?: string;
	title?: string;
	date?: string;
	medicineNames?: string;
	grade?: number;
	expirationDate?: string;
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
	likedItemName,
	medicineNames,
	form = "slim",
	onClick,
	...props
}: CardProps) => {
	const cardStyle = `${style.card} ${style[form]}`;

	const renderCardContent = () => {
		if ((likedItemName && img) || (medicineNames && img)) {
			return <img src={img} className={style.cardImage} />;
		} else if (likedItemName || medicineNames) {
			return (
				<img src={`/images/no_medicine_img.jpg`} className={style.cardImage} />
			);
		} else {
			return (
				<Button
					icon={<PlusIcon />}
					onClick={() => {}}
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
			<LikedCardInfo {...props} itemName={likedItemName} />
		</div>
	);
};

export default CommonCardBox;
