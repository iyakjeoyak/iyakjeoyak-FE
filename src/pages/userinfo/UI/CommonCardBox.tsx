import { MouseEventHandler } from "react";
import TagCommon from "@/components/Tag";
import style from "../style/commoncardbox.module.scss";
import PlusIcon from "@/assets/icons/PlusIcon";
import { Button } from "@/components/Button";

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
	title,
	date,
	img,
	memo,
	tagText,
	form = "slim",
	onClick,
}) => {
	const cardStyle = `${style.card} ${style[form]}`;

	return (
		<div className={cardStyle} onClick={onClick}>
			{img ? (
				<img src={img} className={style.cardImage} />
			) : (
				<Button
					icon={PlusIcon}
					onClick={() => console.log("모냐")}
					variant="greentransparent"
					size="medium"
				/>
			)}

			<div className={style.cardContent}>
				{title && <div className={style.cardTitle}>{title}</div>}
				{date && <time className={style.cardDate}>{date} 까지</time>}
				{memo && <p className={style.cardMemo}>{memo}</p>}
				{tagText && (
					<TagCommon
						text={tagText}
						backgroundColor="green"
						size="small"
						className={style.cardTag}
					/>
				)}
			</div>
		</div>
	);
};

export default CommonCardBox;
