import "./Header.module.scss";

import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import LogoIcon from "@assets/icons/LogoIcon";
import Nav from "../Nav/Nav";

export default function Header() {
	const navigate = useNavigate();
	const [isOpenNav, setIsOpenNav] = useState(false);

	const toggleIsOpenNav = useCallback(() => {
		setIsOpenNav((prev) => !prev);
	}, []);

	const location = useLocation();

	useEffect(() => {
		setIsOpenNav(false);
	}, [location, toggleIsOpenNav]);

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
