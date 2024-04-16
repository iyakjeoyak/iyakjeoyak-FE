import {
	BestReviewBoard,
	MyMedicineBoard,
	PickedMedicine,
} from "@/components/main";

export default function MainPage() {
	return (
		<section>
			<MyMedicineBoard />
			<BestReviewBoard />
			<PickedMedicine />
		</section>
	);
}
