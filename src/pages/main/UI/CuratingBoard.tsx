import CuratingBoardItem from "./CuratingBoardItem";
import getArrayRandomElement from "@/utils/getArrayRandomElement";
import medicineQueryOptions from "@/api/medicine";
import styles from "../styles/CuratingBoard.module.scss";
import { useQuery } from "@tanstack/react-query";

const CuratingBoard = () => {
	const { data: medicines } = useQuery(
		medicineQueryOptions.getUserRecommendMedicines(),
	);

	const randomCuration = medicines && getArrayRandomElement(medicines);

	return (
		<div className={styles.container}>
			<div className={styles.title}>맞춤 영양제 큐레이팅</div>
			{medicines && <CuratingBoardItem medicine={randomCuration} />}
		</div>
	);
};

export default CuratingBoard;
