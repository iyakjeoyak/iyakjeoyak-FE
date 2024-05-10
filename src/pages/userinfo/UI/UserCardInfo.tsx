// import TagCommon from "@/components/Tag";
import StarRating from "@/components/StarRating";
import style from "../style/commoncardbox.module.scss";

export interface UserCardInfoProps {
	medicineNames?: string;
	expirationDate?: string;
	memo?: string;
	grade?: number;
	effect?: string[];
}

const UserCardInfo = ({
	medicineNames,
	expirationDate,
	grade,
	memo,
}: UserCardInfoProps) => {
	return (
		<div className={style.cardContent}>
			{medicineNames && <div className={style.cardTitle}>{medicineNames}</div>}
			{(grade === 0 || grade) && (
				<div className={style.cardTitle}>
					<StarRating filledStars={grade} />
				</div>
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
