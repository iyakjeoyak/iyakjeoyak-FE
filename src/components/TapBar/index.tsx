import { TapType } from "@/constants/TAPS";
import styles from "./index.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";

interface TapBarProps {
	taps: TapType[];
	onClick: (tapValue: string) => void;
}

export default function TapBar({ taps, onClick }: TapBarProps) {
	const currentTapValue = useGetURLSearch("tap") || taps[0].value;

	return (
		<div className={styles.container}>
			{taps.map((tap) => (
				<div
					key={tap.value}
					className={styles.item}
					data-active={currentTapValue === tap.value}
					onClick={() => {
						onClick(tap.value);
					}}
				>
					{tap.label}
				</div>
			))}
		</div>
	);
}
