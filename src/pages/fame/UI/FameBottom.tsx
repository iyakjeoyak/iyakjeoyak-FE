import TagCommon from "@/components/Tag";
import { Link } from "react-router-dom";
import styles from "@/pages/fame/styles/FameBottom.module.scss";
import { users } from "./usersData";

export function FameBottom() {
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
