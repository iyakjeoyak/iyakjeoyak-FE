import { BestReviewBoard, MyMedicineBoard, PickedMedicine } from "./UI";

export default function MainPage() {
	return (
		<section>
			<MyMedicineBoard />
			<BestReviewBoard />
			<PickedMedicine />
		</section>
	);
}
