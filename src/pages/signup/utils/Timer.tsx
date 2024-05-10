import { useEffect } from "react";

interface TimerProps {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	className?: string;
}

const Timer: React.FC<TimerProps> = ({ count, setCount, className }) => {
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	};

	useEffect(() => {
		const id = setInterval(() => {
			setCount((prevCount) => prevCount - 1);
		}, 1000);

		if (count === 0) {
			clearInterval(id);
		}

		return () => clearInterval(id);
	}, [count]);

	return (
		<div className={className}>
			<p>{formatTime(count)}</p>
		</div>
	);
};

export default Timer;
