import Container from "../Container";
import TagButton from "../TagButton";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

interface TagBoardProps {
	title: string;
	tags: Array<{ id: number; name: string }>;
	name: string;
}

export default function TagBoard({ title, name, tags }: TagBoardProps) {
	const { getValues } = useFormContext();
	const currentTags = getValues(name as string) || [];

	return (
		<Container title={title} name={name}>
			<div className={styles.container}>
				{tags.map((tag) => {
					const isTagSelected = currentTags.includes(tag.id);

					return (
						<TagButton
							key={tag.id}
							text={tag.name}
							name={name}
							value={tag.id}
							isTagSelected={isTagSelected}
						/>
					);
				})}
			</div>
		</Container>
	);
}
