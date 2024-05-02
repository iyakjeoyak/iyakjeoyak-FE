import "@styles/global.scss";
import CommonHeaderBox from "../CommonHeaderBox";
import { supplementRecords } from "../../mockData";
import ListIcon from "../../assets/ListIcon";
import CommonCardBox from "../CommonCardBox";
import style from "../../style/supplementhistory.module.scss";
import { useState } from "react";
import GridIcon from "@/pages/userinfo/assets/GridIcon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/Modal/hooks/useModal";

const SupplementHistory = () => {
	const [cardForm, setCardForm] = useState<"slim" | "wide">("slim");
	// const [isAddModalOpen, setIsAddModal] = useState(false);
	// const [isEditModalOpen, setIsEditModal] = useState(false);

	const supplemenRecordtdata = supplementRecords.mySupplements;
	const count = supplementRecords.mySupplements.length;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	// const openAddModal = () => {
	// 	setIsAddModal((prev) => !prev);
	// };

	// const openEditModal = () => {
	// 	setIsEditModal((prev) => !prev);
	// };

	return (
		<section className={style.userSupplementContainer}>
			<CommonHeaderBox
				titleText="복용 중인 영양제"
				count={count}
				Icon={cardForm === "slim" ? ListIcon : GridIcon}
				onClick={onChangeCardStyle}
				className={style.header}
			/>
			<div className={`${style.cardGrid} ${style[cardForm]}`}>
				{supplemenRecordtdata.map((cardInfo, index) => (
					<CommonCardBox
						key={index} // 이후에 item id로 수정
						form={cardForm}
						// onClick={openEditModal}
						{...cardInfo}
					/>
				))}
				<CommonCardBox
					// onClick={openAddModal}
					form={cardForm}
				/>
			</div>
		</section>
	);
};

export default SupplementHistory;
