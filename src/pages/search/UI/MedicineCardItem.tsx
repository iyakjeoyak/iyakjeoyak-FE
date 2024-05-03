import { FaRegStar, FaStar } from "react-icons/fa";

import { MedicineItemType } from "@/types";
import TagCommon from "@/components/Tag";
import styles from "../styles/MedicineCardItem.module.scss";
import { useNavigate } from "react-router-dom";

export default function MedicineCardItem({medicineItem}:{medicineItem:MedicineItemType}) {
  const navigate = useNavigate();

  const {id, prdlst_NM: name, grade, hashtags, reviewCount}= medicineItem;

	return (
		<div
			className={styles.container}
			onClick={() => {
				navigate(`/detail/${id}`);
			}}
		>
			<img src="/images/no_medicine_img.jpg" alt="어쩌구영양제" width={150} height={130}/>
			<div className={styles["content-container"]}>
				<div className={styles["text-container"]}>
					<div className={styles.name}>{name}</div>
					<div className={styles.info}>
						{(grade === null || grade === 0) ? <FaRegStar/> : <FaStar />}
						{grade}({reviewCount})
					</div>
				</div>
				<div className={styles.tags}>
					{hashtags.slice(0, 3).map((tag)=><TagCommon key={tag.id} text={tag.name} size="medium" backgroundColor="green" />)}
				</div>
			</div>
		</div>
	);
}
