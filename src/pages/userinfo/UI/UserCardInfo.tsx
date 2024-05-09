// import TagCommon from "@/components/Tag";
import style from "../style/commoncardbox.module.scss";

export interface UserCardInfoProps {
	medicineName?: string;
	expirationDate?: string;
	memo?: string;
	grade?: number;
	effect?: string[];
}

const UserCardInfo = ({
	medicineName,
	expirationDate,
	grade,
	memo,
}: UserCardInfoProps) => {
	return (
		<div className={style.cardContent}>
			{medicineName && <div className={style.cardTitle}>{medicineName}</div>}
			{(grade === 0 || grade) && (
				<div className={style.cardTitle}>{grade} 점</div>
			)}
			{expirationDate && (
				<time className={style.cardDate}>{expirationDate} 까지</time>
			)}
			{memo && <p className={style.cardMemo}>{memo}</p>}
			{/* {effect &&
				effect.map((effectItem, index) => (
					<TagCommon
						key={index}
						text={effectItem}
						backgroundColor="green"
						size="small"
						className={style.cardTag}
					/>
				))} */}
		</div>
	);
};

export default UserCardInfo;
