import ElementIcon from "@assets/icons/Element";
import { FaStar } from "react-icons/fa";
import { MedicineDetailItemType } from "@/types";
import TagCommon from "@/components/Tag";
import styles from "../styles/PickedMedicine.module.scss";
import { useNavigate } from "react-router-dom";

export default function PickedMedicine({medicine}: {medicine: MedicineDetailItemType}) {
  const navigate = useNavigate();

  const {id,prdlst_NM: name, hashtags,grade, reviewCount, bssh_NM: brand  } = medicine;

	return (
		<article className={styles.container}>
			<div className={styles["title-container"]}>
				<ElementIcon width={20} height={20} />
				<div className={styles.title}>
					MD's <span>pick</span>
				</div>
			</div>
      {/* TODO 이것만 바꿔도 될듯? */}
			<div className={styles["item-container"]} onClick={()=>{navigate(`/detail/${id}`)}}>
				<img src="/images/Medicine.png" alt="약 이름" />
				<div className={styles["content-container"]}>
					<div className={styles.brand}>{brand}</div>
					<div className={styles.name}>{name}</div>
					<div className={styles.star}>
						<FaStar />
						<span>{grade} ({reviewCount}개)</span>
					</div>
					<div className={styles.tags}>
            {hashtags.map((tag)=><TagCommon text={tag.name} size="small" backgroundColor="green" />)}
					</div>
				</div>
			</div>
			<img
				className={styles.handle}
				src="/images/TwoHands.png"
				alt="장식 이미지"
			/>
		</article>
	);
}
