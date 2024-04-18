import { pathName } from "@/utils/pathName";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
interface PathButtonProps {
	paths: string[];
}

export function PathButton({ paths }: PathButtonProps) {
	return (
		<>
			{/* 홈으로 가는 링크 */}
			<Link to="/">
				<IoHomeOutline />
			</Link>{" "}
			/ {/* 각 경로에 대한 링크 생성 */}
			{paths.map((path, index) => (
				<React.Fragment key={index}>
					{index > 0 && " / "}
					{/* 경로와 텍스트에 대한 링크 생성 */}
					<Link to={path} className="active">
						{pathName[path]}
					</Link>
				</React.Fragment>
			))}
		</>
	);
}
