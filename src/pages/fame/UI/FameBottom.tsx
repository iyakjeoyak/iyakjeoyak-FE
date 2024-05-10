import TagCommon from "@/components/Tag";
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
								: "url(/images/FameUser.png)",
							backgroundColor:
								index === 0 ? "#ffd700" : index === 1 ? "#c0c0c0" : "#cd7f32",
						}}
					></div>
					<div className={styles.text}>
						<div className={styles.usernameTag}>
							<div>{user.nickname}</div>
							{index === 0 && (
								<TagCommon text="이약" size="small" backgroundColor="green" />
							)}
						</div>

						{/* <div className={styles.tagWrap}>
							{user.hashtagList.map((hashtag: any) => (
								<TagCommon
									key={hashtag.id}
									text={hashtag.name}
									backgroundColor="white"
								></TagCommon>
							))}
						</div> */}
					</div>
				</li>
			))}
		</ul>
	);
}
