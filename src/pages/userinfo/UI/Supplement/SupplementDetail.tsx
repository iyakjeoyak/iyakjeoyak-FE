import { Button } from "@/components/Button";
import { DetailSupplementArgs } from "@/api/useInfo/getSupplementDetail";
import style from "../../style/supplementdetail.module.scss";

interface SupplementDetailProps {
	supplementData: DetailSupplementArgs;
	onEdit: () => void;
}

const SupplementDetail = ({
	supplementData,
	onEdit,
}: SupplementDetailProps) => {
	return (
		supplementData && (
			<div className={style.content}>
				{supplementData.image ? (
					<img
						src={supplementData.image.fullPath}
						alt="영양제 이미지"
						className={style.image}
					/>
				) : (
					<img
						src="/images/no_medicine_img.jpg"
						alt="영양제 이미지"
						className={style.image}
					/>
				)}
				<div className={style.title}>{supplementData.medicineName}</div>
				<div className={style.box}>
					<div className={style.headTitle}>유통기한</div>
					<div className={style.text}>{supplementData.expirationDate}</div>
				</div>
				<div className={style.box}>
					<div className={style.headTitle}>한줄 메모</div>
					<div className={style.text}>{supplementData.memo}</div>
				</div>
				<Button onClick={onEdit} variant="dark" size="l">
					수정하기
				</Button>
			</div>
		)
	);
};

export default SupplementDetail;
