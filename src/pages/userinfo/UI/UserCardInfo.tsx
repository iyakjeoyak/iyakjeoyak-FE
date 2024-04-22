import TagCommon from "@/components/Tag";
import style from "../style/commoncardbox.module.scss";

export interface UserCardInfoProps {
	title?: string;
	date?: string;
	memo?: string;
	tagText?: string;
}

const UserCardInfo: React.FC<UserCardInfoProps> = ({
	title,
	date,
	memo,
	tagText,
}) => {
	return (
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
	);
};

export default UserCardInfo;
