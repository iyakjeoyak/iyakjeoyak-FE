import TagCommon from "@/components/Tag";
import style from "../style/commoncardbox.module.scss";

export interface UserCardInfoProps {
	name?: string;
	dosage?: string;
	dueDate?: string;
	memo?: string;
	effect?: string;
}

const UserCardInfo = ({
	name,
	dueDate,
	dosage,
	memo,
	effect,
}: UserCardInfoProps) => {
	return (
		<div className={style.cardContent}>
			{name && <div className={style.cardTitle}>{name}</div>}
			{dosage && <div className={style.cardTitle}>{dosage}</div>}
			{dueDate && <time className={style.cardDate}>{dueDate} 까지</time>}
			{memo && <p className={style.cardMemo}>{memo}</p>}
			{effect && (
				<TagCommon
					text={effect}
					backgroundColor="green"
					size="small"
					className={style.cardTag}
				/>
			)}
		</div>
	);
};

export default UserCardInfo;
