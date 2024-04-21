import "./Header.module.scss";

import { FiMenu } from "react-icons/fi";
import LogoIcon from "@assets/icons/LogoIcon";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
	const navigate = useNavigate();
	const [isOpenNav, setIsOpenNav] = useState(false);

	const toggleIsOpenNav = () => {
		setIsOpenNav((prev) => !prev);
	};

	return (
		<>
			<header>
				<LogoIcon
					fill={"#ffffff"}
					width="60px"
					onClick={() => {
						navigate("/home");
					}}
				/>
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
