import "@styles/global.scss";
import CommonHeaderBox from "./CommonHeaderBox";
import { supplementRecordMockData } from "../mockData";
import ListIcon from "../assets/ListIcon";
import CommonCardBox from "./CommonCardBox";
import style from "../style/supplementhistory.module.scss";
import { useState } from "react";
import GridIcon from "@/pages/userinfo/assets/GridIcon";

const SupplementHistory: React.FC = () => {
	const [cardForm, setCardForm] = useState<"slim" | "wide">("slim");
	const [isAddModalOpen, setIsAddModal] = useState(false);
	const [isEditModalOpen, setIsEditModal] = useState(false);

	const data = supplementRecordMockData.mySupplements;
	const count = supplementRecordMockData.mySupplements.length;

	const onChangeCardStyle = () => {
		setCardForm((prevForm) => (prevForm === "slim" ? "wide" : "slim"));
	};

	const openAddModal = () => {
		setIsAddModal((prev) => !prev);
	};

	const openEditModal = () => {
		setIsEditModal((prev) => !prev);
	};

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
				{data.map((item, index) => (
					<CommonCardBox
						key={index}
						img={item.img}
						title={item.name}
						date={item.dueDate}
						memo={item.memo}
						tagText={item.effect.join(", ")}
						form={cardForm}
						onClick={openEditModal}
					/>
				))}
				<CommonCardBox onClick={openAddModal} form={cardForm} />
			</div>
		</section>
	);
};

export default SupplementHistory;
