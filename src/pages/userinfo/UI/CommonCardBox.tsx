import TagCommon from "@/components/Tag";
import style from "../style/commoncardbox.module.scss";

interface CardProps {
	title: string;
	date: string;
	memo?: string;
	tagText?: string;
	form?: "slim" | "wide";
}

const CommonCardBox: React.FC<CardProps> = ({
	title,
	date,
	memo,
	tagText,
	form = "slim",
}) => {
	const cardStyle = `${style.card} ${form === "slim" ? style.slim : style.wide}`;

	return (
		<div className={cardStyle}>
			<div className={style.cardImage}>{/* 이미지 자리 */}</div>

			<div className={style.cardContent}>
				<h3 className={style.cardTitle}>{title}</h3>
				<time className={style.cardDate}>{date}</time>
				{memo && <p className={style.cardMemo}>{memo}</p>}
				{tagText && <TagCommon text={tagText} />}
			</div>
		</div>
	);
};

export default CommonCardBox;
