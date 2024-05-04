import BlankMyMedicineBoard from "./BlankMyMedicineBoard";
import BoardContainer from "./BoardConatiner";
import MyMedicineItem from "./MyMedicineItem";

export default function MyMedicineBoard() {
	const num = [];

  return (
		<BoardContainer title="나의 영양제">
		{num.length !==0 ? <div style={{
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)"
	}}>
      <MyMedicineItem />
      <MyMedicineItem/>
      <MyMedicineItem/>
      <MyMedicineItem/>
      </div>
      :	<BlankMyMedicineBoard/>}
		</BoardContainer>
	);
}
