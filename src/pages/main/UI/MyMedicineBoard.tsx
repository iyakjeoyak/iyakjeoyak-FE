import BlankMyMedicineBoard from "./BlankMyMedicineBoard";
import BoardContainer from "./BoardConatiner";
import MyMedicineItem from "./MyMedicineItem";
import medicineQueryOptions from "@/api/medicine";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function MyMedicineBoard() {
	const navigate = useNavigate();

	const { data: medicines } = useQuery(medicineQueryOptions.getMyMedicines());

	return (
		<BoardContainer
			title="나의 영양제"
			onClick={() => {
				navigate("/userinfo/user-supplement");
			}}
		>
			{medicines && medicines.data.length !== 0 ? (
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(4, 1fr)",
					}}
				>
					{medicines.data.slice(0, 4).map((medicine) => (
						<MyMedicineItem key={medicine.id} medicine={medicine} />
					))}
				</div>
			) : (
				<BlankMyMedicineBoard />
			)}
		</BoardContainer>
	);
}
