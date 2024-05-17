import BlankMyMedicineBoard from "./BlankMyMedicineBoard";
import BoardContainer from "../BoardConatiner";
import MyMedicineItem from "./MyMedicineItem";
import { getAccessToken } from "@/utils/getToken";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import userInfoQueryOptions from "@/api/useInfo";

export default function MyMedicineBoard() {
	const navigate = useNavigate();
	const isLogin = getAccessToken();

	if (!isLogin) {
		return (
			<BoardContainer
				title="나의 영양제"
				onClick={() => {
					navigate("/userinfo/user-supplement");
				}}
			>
				<BlankMyMedicineBoard />
			</BoardContainer>
		);
	}

	const {
		data: { data: medicines },
	} = useQuery({
		...userInfoQueryOptions.getUserSupplementMain({ page: 0, size: 4 }),
	});

	return (
		<BoardContainer
			title="나의 영양제"
			onClick={() => {
				navigate("/userinfo/user-supplement");
			}}
		>
			{medicines && medicines.length !== 0 ? (
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
					}}
				>
					{medicines.map((medicine) => (
						<MyMedicineItem key={medicine.id} medicine={medicine} />
					))}
				</div>
			) : (
				<BlankMyMedicineBoard />
			)}
		</BoardContainer>
	);
}
