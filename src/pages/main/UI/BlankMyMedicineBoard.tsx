import MyMedicineItem from "./MyMedicineItem";
import XIcon from "@/assets/icons/XIcon";
import styles from "../styles/BlankMyMedicineBoard.module.scss";
import { useNavigate } from "react-router-dom";

export default function BlankMyMedicineBoard() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<MyMedicineItem />
			<div className={styles["content-container"]}>
				<div className={styles.icons}>
					<XIcon width={34} height={32} />
					<XIcon width={34} height={32} />
					<XIcon width={34} height={32} />
				</div>
				<div className={styles.text}>
					<div>기록된 영양제가 없습니다</div>
					<div>나의 영양제를 추가해주세요!</div>
				</div>
				<button
					onClick={() => {
						navigate("/userinfo/user-supplement");
					}}
				>
					기록하러 가기
				</button>
			</div>
		</div>
	);
}
