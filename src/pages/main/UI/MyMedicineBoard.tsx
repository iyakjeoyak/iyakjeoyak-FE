import BoardContainer from "./BoardConatiner";
import MyMedicineItem from "./MyMedicineItem";

export default function MyMedicineBoard() {
	return (
		<BoardContainer title="나의 영양제">
			<MyMedicineItem />
			<MyMedicineItem />
			<MyMedicineItem />
			<MyMedicineItem />
		</BoardContainer>
	);
}
