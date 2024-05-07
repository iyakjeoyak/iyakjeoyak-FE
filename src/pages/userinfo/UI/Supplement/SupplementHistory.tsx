import "@styles/global.scss";

import { useEffect, useState } from "react";

import CommonCardBox from "../CommonCardBox";
import CommonHeaderBox from "../CommonHeaderBox";
import GridIcon from "@/pages/userinfo/assets/GridIcon";
import ListIcon from "../../assets/ListIcon";
import Modal from "@/components/Modal";
import SupplementEditForm from "./SupplementEditForm";
import { ShortSupplementInfo, SupplementInfo } from "../../userInfoType";
import SupplementModal from "./SupplementModal";
import style from "../../style/supplementhistory.module.scss";
import { supplementRecords } from "../../mockData";
import useOpen from "@/hooks/useOpen";
import { showToast } from "@/utils/ToastConfig";
import getUserSupplement from "@/api/useInfo/getUserSupplement";

const noSupplementData = {
	mySupplementId: 0,
	name: "",
	dosage: "",
	dueDate: "",
	effect: [],
	memo: "",
	img: "",
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
	const [supplementData, setSupplmentData] = useState<
		ShortSupplementInfo[] | null
	>(null);
	const [selectedSupplement, setSelectedSupplement] =
		useState<ShortSupplementInfo | null>(null);

	useEffect(() => {
		const fetchSupplement = async () => {
			try {
				const userSupplement = await getUserSupplement({ page: 0, size: 10 });
				setSupplmentData(userSupplement.data);
				console.log(userSupplement);
			} catch (error) {
				showToast({
					type: "error",
					message: "내 영양제 데이터를 가져오는 중 오류가 발생했습니다.",
				});
			}
		};
		fetchSupplement();
	}, []);

	// const supplemenRecorddata = supplementRecords.mySupplements;
	const count = supplementRecords.mySupplements.length;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	const handleCardClick = (supplement: ShortSupplementInfo) => {
		setSelectedSupplement(supplement);
	};

	const handleSubmmit = () => {
		console.log("폼 제출");
	};

	useEffect(() => {
		console.log("state 변화");
	}, [selectedSupplement]);

	return (
		<section className={style.userSupplementContainer}>
			<CommonHeaderBox
				titleText="복용 중인 영양제"
				count={count}
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
							{supplementData &&
								supplementData?.map((cardInfo, mySupplementId) => (
									<CommonCardBox
										key={mySupplementId}
										form={cardForm}
										onClick={() => handleCardClick(cardInfo)}
										{...cardInfo}
									/>
								))}
						</div>
					}
				/>

				<Modal.Content>
					{selectedSupplement && (
						<SupplementModal itemId={selectedSupplement.id} />
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
						onSubmit={handleSubmmit}
					/>
				</Modal.Content>
			</Modal>
		</section>
	);
};

export default SupplementHistory;
