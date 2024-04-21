import TagCommon from "@/components/Tag";
import { Link } from "react-router-dom";
import styles from "@/pages/fame/styles/FameBottom.module.scss";
import profile from "/images/no_profile_image.jpg?url";

export function FameBottom() {
	const users = [
		{ id: 1, nickname: "유저1", blog: "/", profileImg: profile },
		{ id: 2, nickname: "유저2", blog: "/", profileImg: profile },
		{ id: 3, nickname: "유저3", blog: "/", profileImg: profile },
		{ id: 4, nickname: "유저4", blog: "/", profileImg: profile },
		{ id: 5, nickname: "유저5", blog: "/", profileImg: profile },
	];
	return (
		<ul className={styles.container}>
			{users.map((user) => (
				<li key={user.id} className={styles.wrap}>
					<img src={user.profileImg} alt="" />
					<div className={styles.text}>
						<div>{user.nickname}</div>
						<Link to={user.blog}>블로그</Link>
					</div>
					{user.id === 1 && (
						<Link to="">
							<TagCommon text="허준" size="small" backgroundColor="green" />
						</Link>
					)}
				</li>
			))}
		</ul>
	);
}
