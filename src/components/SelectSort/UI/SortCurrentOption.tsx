import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/SortCurrentOption.module.scss";
import { useSelectSort } from "../hooks/useSelectSort";
import { getValueLabel } from "../utils";

export default function SortCurrentOption() {
	const { currentSortValue, toggleIsOpenOptionList } = useSelectSort();
	return (
		<div onClick={toggleIsOpenOptionList} className={styles.container}>
			{getValueLabel(currentSortValue)}
			<IoIosArrowDown />
		</div>
	);
}
