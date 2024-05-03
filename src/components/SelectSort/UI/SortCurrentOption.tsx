import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/SortCurrentOption.module.scss";
import { useSelectSort } from "../hooks/useSelectSort";

export default function SortCurrentOption() {
	const { currentSort, toggleIsOpenOptionList } = useSelectSort();
  
	return (
		<div onClick={toggleIsOpenOptionList} className={styles.container}>
			{currentSort.label}
			<IoIosArrowDown />
		</div>
	);
}
