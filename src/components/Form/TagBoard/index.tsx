import Container from "../Container";
import TagButton from "../TagButton";
import styles from "./index.module.scss";

interface TagBoardProps {
	title: string;
	tags: Array<{ id: number; name: string }>;
  name: string;
}

export default function TagBoard({ title, name, tags }: TagBoardProps) {
	return (
		<Container title={title} name={name}>
			<div className={styles.container}>
				{tags.map((tags) => (
					<TagButton key={tags.id} text={tags.name} name={name} value={tags.id} />
				))}
			</div>
		</Container>
	);
}
