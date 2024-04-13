import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";

const MAIN_NAVS = [
  { string: "홈", to: "/home" },
  { string: "약 조회하기", to: "#" },
  { string: "명예의 전당", to: "#" },
  { string: "근처 약국", to: "#" },
];

export default function Nav({
  toggleIsOpenNav,
}: {
  toggleIsOpenNav: () => void;
}) {
  const navigator = useNavigate();

  return (
    <div className="background" onClick={toggleIsOpenNav}>
      <nav>
        <div className={styles["main-nav-container"]}>
          {MAIN_NAVS.map((navItem) => (
            <button
              key={navItem.string}
              className={styles["main-nav-item"]}
              onClick={() => {
                navigator(navItem.to);
              }}
            >
              {navItem.string}
            </button>
          ))}
        </div>
        <div className={styles["divide"]} />
        <div className={styles["sub-nav-container"]}>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </nav>
    </div>
  );
}
