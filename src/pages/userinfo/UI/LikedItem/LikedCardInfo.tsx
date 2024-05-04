import TagCommon from "@/components/Tag";
import HeartIcon from "@/assets/icons/HeartIcon";
import style from "../../style/likeditem.module.scss";

export interface LikedItemProps {
	likedItemId?: number;
	itemName?: string;
	likedEffect?: string[];
	liked?: boolean;
}

const LikedCardInfo = ({ itemName, likedEffect, liked }: LikedItemProps) => {
	console.log(likedEffect);
	return (
		<div className={style.cardContent}>
			<div className={style.cardTitle}>
				{itemName && <div className={style.cardTitle}>{itemName}</div>}
				{liked && <HeartIcon />}
			</div>
			{likedEffect &&
				likedEffect.map((effectItem, index) => (
					<TagCommon
						key={index}
						text={effectItem}
						backgroundColor="green"
						size="small"
						className={style.cardTag}
					/>
				))}
		</div>
	);
};

export default LikedCardInfo;
