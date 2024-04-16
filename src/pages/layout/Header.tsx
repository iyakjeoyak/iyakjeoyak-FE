import "./Header.module.scss";

import { FiMenu } from "react-icons/fi";
import LogoIcon from "../../assets/LogoIcon";
import Nav from "./Nav";
import { useState } from "react";

export default function Header() {
	const [isOpenNav, setIsOpenNav] = useState(false);

	const toggleIsOpenNav = () => {
		setIsOpenNav((prev) => !prev);
	};

	return (
		<>
			<header>
				<LogoIcon fill={"#ffffff"} width="60px" />
				<FiMenu onClick={toggleIsOpenNav} size="40px" color="white" />
			</header>
			{isOpenNav && (
				<div className="background" onClick={toggleIsOpenNav}>
					<Nav toggleIsOpenNav={toggleIsOpenNav} />
				</div>
			)}
		</>
	);
}
