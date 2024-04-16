import MyMedicineItem from "./MyMedicineItem";

export default function MyMedicineBoard() {
	return (
		<article>
			<div>나의 영양제</div>
			<div>
				<MyMedicineItem />
				<MyMedicineItem />
				<MyMedicineItem />
				<MyMedicineItem />
			</div>
		</article>
	);
}
