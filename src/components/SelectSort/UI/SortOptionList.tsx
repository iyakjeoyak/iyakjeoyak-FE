import styles from "../styles/SortOptionList.module.scss";
import { useSelectSort } from "../hooks/useSelectSort";

interface SortOptionListProps {
	children: React.ReactNode;
}

export default function SortOptionList({ children }: SortOptionListProps) {
	const { isOpenOptionList } = useSelectSort();
	return isOpenOptionList ? (
		<div className={styles.container}>{children}</div>
	) : null;
}
