import styles from "./index.module.scss";

interface TapType {
	name: string;
	value: string;
}
interface TapBarProps {
	currentTapValue: string;
	handleChangeCurrentTapValue: (tapValue: string) => void;
	taps: TapType[];
}
export default function TapBar({
	taps,
	currentTapValue,
	handleChangeCurrentTapValue,
}: TapBarProps) {
	return (
		<div className={styles.container}>
			{taps.map((tap) => (
				<div
					key={tap.value}
					className={`${styles.item} ${currentTapValue === tap.value && styles.active}`}
					onClick={() => {
						handleChangeCurrentTapValue(tap.value);
					}}
				>
					{tap.name}
				</div>
			))}
		</div>
	);
}
