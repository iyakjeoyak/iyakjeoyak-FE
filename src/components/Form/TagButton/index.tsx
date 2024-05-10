import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface TagButtonProps<T> {
	name: keyof T;
	text: string;
	size?: "small" | "medium";
	backgroundColor?: "green" | "midgreen" | "lightgreen" | "white";
	value?: number;
	isTagSelected?: boolean;
}

const TagButton = <T,>({
	name,
	text,
	size = "medium",
	backgroundColor = "white",
	value,
	isTagSelected = false,
}: TagButtonProps<T>) => {
	const [selected, setSelected] = useState(false);
	const { register, setValue, getValues } = useFormContext();
	const sizeClass = styles[`tag-${size}`] || "";
	const backgroundClass = styles[`background-${backgroundColor}`] || "";
	const buttonClass = `${sizeClass} ${backgroundClass} ${isTagSelected || selected ? styles.selected : ""}`;

	const handleClick = () => {
		const currentTags = getValues(name as string) || []; // 현재 선택된 태그 배열 가져오기
		const isSelected = currentTags.includes(value);
		// 선택된 태그 배열 업데이트
		const updatedTags = isSelected
			? currentTags.filter((tag: number) => tag !== value) // 선택 취소 시 해당 태그 제거
			: [...currentTags, value]; // 선택 시 해당 태그 추가
		// 클릭시 스타일 추가
		setSelected((prev) => !prev);
		// 업데이트된 태그 배열을 폼 상태에 저장
		setValue(name as string, updatedTags);
	};

	return (
		<span className={buttonClass} onClick={handleClick}>
			{text}
			<input type="hidden" value={value} {...register(name as string)} />
		</span>
	);
};

export default TagButton;
