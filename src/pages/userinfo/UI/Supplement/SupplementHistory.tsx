import "@styles/global.scss";

import { useEffect, useState } from "react";

import CommonCardBox from "../CommonCardBox";
import CommonHeaderBox from "../CommonHeaderBox";
import GridIcon from "@/pages/userinfo/assets/GridIcon";
import ListIcon from "../../assets/ListIcon";
import Modal from "@/components/Modal";
import SupplementEditForm from "./SupplementEditForm";
import { ShortSupplementInfo, ShortSupplementProps } from "../../userInfoType";
import SupplementModal from "./SupplementModal";
import style from "../../style/supplementhistory.module.scss";
import useOpen from "@/hooks/useOpen";
import { showToast } from "@/utils/ToastConfig";
import getUserSupplement from "@/api/useInfo/getUserSupplement";

const noSupplementData = {
	medicineId: 0,
	medicineName: "",
	expirationDate: "",
	memo: "",
	image: "",
};

const SupplementHistory = () => {
	const {
		isOpen: isOpenSupplement,
		onClose: onCloseSupplement,
		onOpen: onOpenSupplement,
		toggleOpen: toggleOpenSupplement,
	} = useOpen();
	const {
		isOpen: isOpenEditSupplement,
		onClose: onCloseEditSupplement,
		onOpen: onOpenEditSupplement,
		toggleOpen: toggleOpenEditSupplement,
	} = useOpen();

	const [cardForm, setCardForm] = useState<"slim" | "wide">("slim");
	const [supplementData, setSupplmentData] =
		useState<ShortSupplementProps | null>(null);
	const [selectedSupplement, setSelectedSupplement] =
		useState<ShortSupplementInfo | null>(null);

	useEffect(() => {
		const fetchSupplement = async () => {
			try {
				const userSupplement = await getUserSupplement({ page: 0, size: 20 });
				setSupplmentData(userSupplement);
			} catch (error) {
				showToast({
					type: "error",
					message: "내 영양제 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};
		fetchSupplement();
	}, [isOpenEditSupplement, isOpenSupplement]);

	const count = supplementData?.totalElement;
	const supplementInfo = supplementData?.data;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	const handleCardClick = (supplement: ShortSupplementInfo) => {
		setSelectedSupplement(supplement);
	};

	return (
		<section className={style.userSupplementContainer}>
			<CommonHeaderBox
				titleText="복용 중인 영양제"
				count={count ? count : 0}
				Icon={cardForm === "slim" ? ListIcon : GridIcon}
				onClick={onChangeCardStyle}
				className={style.header}
			/>

			<Modal
				isOpen={isOpenSupplement}
				onClose={onCloseSupplement}
				toggleOpen={toggleOpenSupplement}
				onOpen={onOpenSupplement}
			>
				<Modal.Trigger
					openElement={
						<div className={`${style.cardGrid} ${style[cardForm]}`}>
							{supplementInfo &&
								supplementInfo?.map((cardInfo) => (
									<CommonCardBox
										key={cardInfo.id}
										form={cardForm}
										medicineNames={cardInfo.medicineName}
										img={cardInfo.image?.fullPath}
										onClick={() => handleCardClick(cardInfo)}
										{...cardInfo}
									/>
								))}
						</div>
					}
				/>

				<Modal.Content>
					{selectedSupplement?.medicineName && (
						<SupplementModal
							itemId={selectedSupplement.id}
							onClose={onCloseSupplement}
						/>
					)}
				</Modal.Content>
			</Modal>

			<Modal
				isOpen={isOpenEditSupplement}
				onClose={onCloseEditSupplement}
				toggleOpen={toggleOpenEditSupplement}
				onOpen={onOpenEditSupplement}
			>
				<Modal.Trigger openElement={<CommonCardBox form={cardForm} />} />
				<Modal.Content>
					<SupplementEditForm
						formInitialValues={noSupplementData}
						onClose={onCloseEditSupplement}
					/>
				</Modal.Content>
			</Modal>
		</section>
	);
};

export default SupplementHistory;
