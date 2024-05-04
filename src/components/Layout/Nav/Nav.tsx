import { LazyMotion, domAnimation, m } from "framer-motion";

import { getAccessToken } from "@/utils/getToken";
import { logout } from "@/utils/logout";
import { routerpaths } from "@/utils/pathName";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";

const MAIN_NAVS = [
	{ name: "홈", to: routerpaths.HOME, requiresToken: false },
	{ name: "약 조회하기", to: routerpaths.SEARCH, requiresToken: false },
	{ name: "명예의 전당", to: routerpaths.FAME, requiresToken: false },
	{ name: "근처 약국", to: routerpaths.MAP, requiresToken: false },
];

const SUB_NAVS = [
	{ name: "로그인", to: routerpaths.LOGIN, requiresToken: false },
	{ name: "회원가입", to: routerpaths.SIGNUP, requiresToken: false },
	{ name: "마이페이지", to: routerpaths.USERINFO, requiresToken: true },
];

export default function Nav({
	toggleIsOpenNav,
}: {
	toggleIsOpenNav: () => void;
}) {
	const navigator = useNavigate();

  const token = getAccessToken();
  
	return (
    <LazyMotion features={domAnimation}>
      <m.nav
        onClick={toggleIsOpenNav}
        initial={{ opacity: 1, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles["main-nav-container"]}>
          {MAIN_NAVS.map((navItem) => (
            <m.button
              key={navItem.name}
              className={styles["main-nav-item"]}
              onClick={() => {
                navigator(navItem.to);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {navItem.name}
            </m.button>
          ))}
        </div>
        <div className={styles["sub-nav-container"]}>
          <div className={styles["divide"]} />
          {SUB_NAVS.map((navItem) => {
            if (navItem.requiresToken && !token) return;
            
            if (!navItem.requiresToken && token) return;
            
            return (
            <m.button
              key={navItem.name}
              className={styles["sub-nav-item"]}
              onClick={() => {
                navigator(navItem.to);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {navItem.name}
            </m.button>
            )
            })
          }
          {token && <m.button onClick={logout}  className={styles["sub-nav-item"]}>로그아웃</m.button>}
        </div>
      </m.nav>
    </LazyMotion>
	);
}
