import { IoIosArrowDown } from "react-icons/io";
import styles from "../styles/SortCurrentOption.module.scss";
import { useSelectSort } from "../hooks/useSelectSort";

export default function SortCurrentOption({valueToLabel}: {valueToLabel: Record<string, string>}) {
	const { currentSortValue, toggleIsOpenOptionList } = useSelectSort();
	return (
		<div onClick={toggleIsOpenOptionList} className={styles.container}>
			{valueToLabel[currentSortValue]}
			<IoIosArrowDown />
		</div>
	);
}
