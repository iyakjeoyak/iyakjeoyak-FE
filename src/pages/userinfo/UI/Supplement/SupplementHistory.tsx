import "@styles/global.scss";
import CommonHeaderBox from "../CommonHeaderBox";
import { supplementRecords } from "../../mockData";
import ListIcon from "../../assets/ListIcon";
import CommonCardBox from "../CommonCardBox";
import style from "../../style/supplementhistory.module.scss";
import { useEffect, useState } from "react";
import GridIcon from "@/pages/userinfo/assets/GridIcon";
import Modal from "@/components/Modal";
import { SupplementInfo } from "../../userInfoType";
import SupplementModal from "./SupplementModal";
import SupplementEditForm from "./SupplementEditForm";

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
	const [cardForm, setCardForm] = useState<"slim" | "wide">("slim");
	const [selectedSupplement, setSelectedSupplement] =
		useState<SupplementInfo | null>(null);

	const supplemenRecorddata = supplementRecords.mySupplements;
	const count = supplementRecords.mySupplements.length;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	const handleCardClick = (supplement: SupplementInfo) => {
		setSelectedSupplement(supplement);
	};

	const handleSubmmit = () => {
		console.log("폼 제출");
	};

	console.log(selectedSupplement);
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

			<Modal>
				<Modal.Trigger
					openElement={
						<div className={`${style.cardGrid} ${style[cardForm]}`}>
							{supplemenRecorddata.map((cardInfo, mySupplementId) => (
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
						<SupplementModal itemId={selectedSupplement.mySupplementId} />
					)}
				</Modal.Content>
			</Modal>

			<Modal>
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
