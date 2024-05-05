import CuratingBoardItem from "./CuratingBoardItem";
import styles from "../styles/CuratingBoard.module.scss";

const CuratingBoard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>맞춤 영양제 큐레이팅</div>
			<CuratingBoardItem />
		</div>
	);
};

export default CuratingBoard;
