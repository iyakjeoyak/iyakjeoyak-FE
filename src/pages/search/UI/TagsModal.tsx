import { useLocation, useNavigate } from "react-router-dom";

import { TAPS_QUERIES } from "@/constants/TAPS";
import Tag from "@/components/Tag";
import ectQueryOptions from "@/api/common";
import styles from "../styles/TagsModal.module.scss";
import useGetURLSearch from "@/hooks/useGetURLSearch";
import { useQuery } from "@tanstack/react-query";

export default function TagsModal({
	toggleIsTagsModalOpen,
}: {
	toggleIsTagsModalOpen: () => void;
}) {
	const tap = useGetURLSearch("tap");
	const { data: tags } = useQuery(
		tap === TAPS_QUERIES.FEATURE
			? ectQueryOptions.getCategories()
			: ectQueryOptions.getHashtags(),
	);

	const navigate = useNavigate();
	const location = useLocation();

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
								if (tap === TAPS_QUERIES.FEATURE) {
									navigate(
										`${location.pathname}${location.search}&hashtagId=${tag.id}&name=${tag.name}`,
									);
								}
								navigate(
									`${location.pathname}${location.search}&categoryId=${tag.id}&name=${tag.name}`,
								);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
