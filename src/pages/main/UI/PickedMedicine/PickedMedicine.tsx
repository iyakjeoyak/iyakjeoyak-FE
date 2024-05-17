import { FaStar } from "react-icons/fa";
import { MedicineDetailItemType } from "@/types";
import TagCommon from "@/components/Tag";
import styles from "../../styles/PickedMedicine.module.scss";
import { useNavigate } from "react-router-dom";

export default function PickedMedicine({
	medicine,
}: {
	medicine: { ranking: number; medicine: MedicineDetailItemType };
}) {
	const navigate = useNavigate();

	const {
		id,
		prdlst_NM: name,
		hashtags,
		grade,
		reviewCount,
		bssh_NM: brand,
		image,
	} = medicine.medicine;

	return (
		<div
			className={styles["item-container"]}
			onClick={() => {
				navigate(`/detail/${id}`);
			}}
		>
			<img
				src={image?.fullPath ?? "/images/no_medicine_img.jpg"}
				alt="약 이름"
				width={140}
				height={180}
			/>
			<div className={styles["content-container"]}>
				<div className={styles.brand}>{brand}</div>
				<div className={styles.name}>{name}</div>
				<div className={styles.star}>
					<FaStar />
					<span>
						{grade} ({reviewCount}개)
					</span>
				</div>
				<div className={styles.tags}>
					{hashtags.map((tag) => (
						<TagCommon
							text={tag.name}
							key={tag.id}
							size="small"
							backgroundColor="green"
						/>
					))}
				</div>
			</div>
			<img
				className={styles.handle}
				src="/images/TwoHands.png"
				alt="장식 이미지"
			/>
		</div>
	);
}
