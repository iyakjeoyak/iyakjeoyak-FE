import Container from "../Container";
import TagButton from "../TagButton";
import styles from "./index.module.scss";

interface TagBoardProps {
	title: string;
	tags: Array<{ id: number; name: string }>;
}

export default function TagBoard({ title, tags }: TagBoardProps) {
	return (
		<Container title={title}>
			<div className={styles.container}>
				{tags.map((tags) => (
					<TagButton key={tags.id} text={tags.name} name="tag" />
				))}
			</div>
		</Container>
	);
}
