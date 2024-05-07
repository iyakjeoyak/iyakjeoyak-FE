import TagCommon from "@/components/Tag";
import { Link } from "react-router-dom";
import styles from "@/pages/fame/styles/FameBottom.module.scss";
import { useQuery } from "@tanstack/react-query";
import { fameQueryOptions } from "@/api/fame";

export function FameBottom() {
	const { data: fames } = useQuery(fameQueryOptions.getFame());
	const bottomUsers = [...fames].sort((a, b) => b.point - a.point);
	return (
		<ul className={styles.container}>
			{bottomUsers.slice(0, 5).map((user, index) => (
				<li key={`${user.userId}-${index}`} className={styles.wrap}>
					<div
						className={`${styles.profileImage} ${user.profileImg ? "" : styles.fameUser}`}
						style={{
							backgroundImage: user.image
								? `url(${user.image.fullPath})`
								: "url(/public/images/FameUser.png)",
							backgroundColor:
								index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : "#cd7f32",
						}}
					></div>
					<div className={styles.text}>
						<div>{user.username}</div>
						<Link to={user.blog}>블로그</Link>
					</div>
					{index === 0 && (
						<Link to="">
							<TagCommon text="허준" size="small" backgroundColor="green" />
						</Link>
					)}
				</li>
			))}
		</ul>
	);
}
