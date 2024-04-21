import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styles from "@/components/Form/TagButton/TagButton.module.scss";

interface TagButtonProps<T> {
	name: keyof T;
	text: string;
	size?: "small" | "medium";
	backgroundColor?: "green" | "midgreen" | "lightgreen" | "white";
	value?: string;
}

const TagButton = <T,>({
	name,
	text,
	size = "medium",
	backgroundColor = "white",
	value,
}: TagButtonProps<T>) => {
	const [selected, setSelected] = useState(false);
	const { register, setValue, getValues } = useFormContext();
	const sizeClass = styles[`tag-${size}`] || "";
	const backgroundClass = styles[`background-${backgroundColor}`] || "";
	const buttonClass = `${sizeClass} ${backgroundClass} ${selected ? styles.selected : ""}`;

	const handleClick = () => {
		const currentTags = getValues(name as string) || []; // 현재 선택된 태그 배열 가져오기
		const isSelected = currentTags.includes(text);
		// 선택된 태그 배열 업데이트
		const updatedTags = isSelected
			? currentTags.filter((tag: string) => tag !== text) // 선택 취소 시 해당 태그 제거
			: [...currentTags, text]; // 선택 시 해당 태그 추가
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
