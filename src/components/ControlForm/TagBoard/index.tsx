import { forwardRef } from "react";
import Container from "../Container";
import TagButton from "../TagButton";
import styles from "./index.module.scss";

interface TagBoardProps {
	title: string;
	tags: Array<{ id: number; name: string }>;
	selectedTags: number[];
	onTagClick: (selectedTags: number[]) => void;
}

const TagBoard = forwardRef<HTMLDivElement, TagBoardProps>(
	({ title, tags, selectedTags = [], onTagClick }: TagBoardProps, ref) => {
		const handleClick = (tagId: number) => {
			const updatedTags = selectedTags.includes(tagId)
				? selectedTags.filter((id) => id !== tagId) // 선택된 경우 제거
				: [...selectedTags, tagId]; // 선택되지 않은 경우 추가
			onTagClick(updatedTags); // 업데이트된 배열 전달
		};
		return (
			<Container title={title} ref={ref}>
				<div className={styles.container}>
					{tags.map((tag) => {
						const isTagSelected = selectedTags.includes(tag.id);
						return (
							<TagButton
								key={tag.id}
								text={tag.name}
								value={tag.id}
								isSelected={isTagSelected}
								onClick={() => handleClick(tag.id)}
							/>
						);
					})}
				</div>
			</Container>
		);
	},
);

export default TagBoard;
