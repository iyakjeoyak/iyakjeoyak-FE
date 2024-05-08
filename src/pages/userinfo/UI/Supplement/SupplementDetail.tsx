import { Button } from "@/components/Button";
import { SupplementFormValues } from "./SupplementModal";

interface SupplementDetailProps {
	supplementData: SupplementFormValues;
	onEdit: () => void;
}

const SupplementDetail = ({
	supplementData,
	onEdit,
}: SupplementDetailProps) => {
	return (
		supplementData && (
			<div>
				<img src={supplementData.img} alt="영양제 이미지" />
				<div>{supplementData.medicineName}</div>
				<div>
					<div>유통기한</div>
					<div>{supplementData.expirationDate}</div>
				</div>
				<div>
					<div>한줄 메모</div>
					<div>{supplementData.memo}</div>
				</div>
				<Button onClick={onEdit} variant="dark" size="l">
					수정하기
				</Button>
			</div>
		)
	);
};

export default SupplementDetail;
