import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
interface Path {
	text: string;
	path: string;
}

interface PathButtonProps {
	paths: Path[];
}

export function PathButton({ paths }: PathButtonProps) {
	return (
		<>
			<Link to="/">
				<IoHomeOutline></IoHomeOutline>
			</Link>{" "}
			/{" "}
			{paths.map((pathObj, index) => (
				<React.Fragment key={index}>
					{index > 0 && " / "}
					<Link to={pathObj.path}>{pathObj.text}</Link>
				</React.Fragment>
			))}
		</>
	);
}
