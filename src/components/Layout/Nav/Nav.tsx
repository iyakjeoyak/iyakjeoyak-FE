import { motion } from "framer-motion";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";

const MAIN_NAVS = [
	{ name: "홈", to: "/home" },
	{ name: "약 조회하기", to: "/search" },
	{ name: "명예의 전당", to: "/fame" },
	{ name: "근처 약국", to: "#" },
	{ name: "마이 페이지", to: "/userInfo" },
];

const SUB_NAVS = [
	{ name: "로그인", to: "/login" },
	{ name: "회원가입", to: "/signup" },
	{ name: "마이페이지", to: "/userInfo" },
];

export default function Nav({
	toggleIsOpenNav,
}: {
	toggleIsOpenNav: () => void;
}) {
	const navigator = useNavigate();

	return (
		<motion.nav
			onClick={toggleIsOpenNav}
			initial={{ opacity: 1, x: "100%" }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: "-100%" }}
			transition={{ duration: 0.3 }}
		>
			<div className={styles["main-nav-container"]}>
				{MAIN_NAVS.map((navItem) => (
					<motion.button
						key={navItem.name}
						className={styles["main-nav-item"]}
						onClick={() => {
							navigator(navItem.to);
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						{navItem.name}
					</motion.button>
				))}
			</div>
			<div className={styles["sub-nav-container"]}>
				<div className={styles["divide"]} />
				{SUB_NAVS.map((navItem) => (
					<motion.button
						key={navItem.name}
						className={styles["sub-nav-item"]}
						onClick={() => {
							navigator(navItem.to);
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						{navItem.name}
					</motion.button>
				))}
			</div>
		</motion.nav>
	);
}
