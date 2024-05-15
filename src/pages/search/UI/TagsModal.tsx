import { useLocation, useNavigate } from "react-router-dom";

import { TAPS_QUERIES } from "@/constants/TAPS";
import Tag from "@/components/Tag";
import { TagType } from "@/types";
import qs from "qs";
import styles from "../styles/TagsModal.module.scss";
import tagQueryOptions from "@/api/tag";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useQuery } from "@tanstack/react-query";

export default function TagsModal({
	toggleIsTagsModalOpen,
	currentTapValue,
}: {
	currentTapValue: string;
	toggleIsTagsModalOpen: () => void;
}) {
	const tap = useGetURLSearch("tap");
	const { data: tags } = useQuery(
		tap === TAPS_QUERIES.FEATURE
			? tagQueryOptions.getCategories()
			: tagQueryOptions.getHashtags(),
	);

	const navigate = useNavigate();
	const location = useLocation();

	const handleTagClick = (tag: TagType) => {
		let updatedQuery: { [key: string]: any };

		if (tap === TAPS_QUERIES.FEATURE) {
			updatedQuery = {
				...qs.parse(location.search, { ignoreQueryPrefix: true }),
				tap: currentTapValue,
				hashtagId: tag.id,
				name: tag.name,
			};
			delete updatedQuery.categoryId;
		} else {
			updatedQuery = {
				...qs.parse(location.search, { ignoreQueryPrefix: true }),
				tap: currentTapValue,
				categoryId: tag.id,
				name: tag.name,
			};
			delete updatedQuery.hashtagId;
		}

		const newQueryString = qs.stringify(updatedQuery, { addQueryPrefix: true });
		navigate(`${location.pathname}${newQueryString}`);
	};

	return (
		<div onClick={toggleIsTagsModalOpen} className="background">
			<div className={styles.container}>
				<div className={styles.title}>태그 선택</div>
				<div className={styles["tags-container"]}>
					{tags.map((tag) => (
						<Tag
							key={tag.id}
							text={tag.name}
							style={{ width: `${tag.name.length * 4}%`, borderRadius: "10px" }}
							onClick={() => {
								handleTagClick(tag);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
