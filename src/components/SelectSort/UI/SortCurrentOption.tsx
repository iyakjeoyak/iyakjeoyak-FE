import { IoIosArrowDown } from "react-icons/io";
import getValueLabel from "../utils.ts/getValueLabel";
import styles from "../styles/SortCurrentOption.module.scss";
import { useSelectSort } from "../hooks/useSelectSort";

export default function SortCurrentOption() {
	const { currentSortValue, toggleIsOpenOptionList } = useSelectSort();
	return (
		<div onClick={toggleIsOpenOptionList} className={styles.container}>
			{getValueLabel(currentSortValue)}
			<IoIosArrowDown />
		</div>
	);
}
