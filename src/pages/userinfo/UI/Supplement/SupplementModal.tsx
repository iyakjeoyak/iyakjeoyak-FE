import SupplementDetailView from "./SupplementDetail";
import SupplementEditForm from "./SupplementEditForm";
import { SupplementSubmmitInfo } from "../../userInfoType";
import { useEffect, useState } from "react";
import getSupplementDetail, {
	DetailSupplementArgs,
} from "@/api/useInfo/getSupplementDetail";
import { SupplementContext } from "../../utils/supplementDetailContext";
import { showToast } from "@/utils/ToastConfig";

interface SupplementDetailModalProps {
	itemId: number;
	onClose: () => void;
}

export interface SupplementFormValues {
	id?: number;
	medicineName?: string;
	expirationDate?: string;
	memo?: string;
	image?: string;
}

const formInitialValues: SupplementSubmmitInfo = {
	medicineId: 0,
	medicineName: "",
	expirationDate: "",
	memo: "",
	image: "",
};

const SupplementModal = ({ itemId, onClose }: SupplementDetailModalProps) => {
	const [detailData, setDetailData] = useState<DetailSupplementArgs | null>(
		null,
	);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		const fectchSupplementDetail = async () => {
			try {
				const detailData = await getSupplementDetail({ storageId: itemId });
				setDetailData(detailData);
			} catch (error) {
				showToast({
					type: "error",
					message: "내 영양제 상세 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};
		fectchSupplementDetail();
	}, [itemId]);

	const handleEditClick = () => {
		setIsEditing((prev) => !prev);
	};

	if (!detailData) return null;

	return (
		<SupplementContext.Provider value={{ detailData, setDetailData }}>
			<article>
				{!isEditing && detailData ? (
					<SupplementDetailView
						supplementData={detailData}
						onEdit={handleEditClick}
					/>
				) : (
					<SupplementEditForm
						formInitialValues={
							detailData
								? {
										...detailData,
										image: detailData.image ? detailData.image.fullPath : "",
									}
								: formInitialValues
						}
						onClose={onClose}
					/>
				)}
			</article>
		</SupplementContext.Provider>
	);
};

export default SupplementModal;
