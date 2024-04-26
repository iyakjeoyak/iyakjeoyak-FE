import { AxiosError } from "axios";
import { ReviewItemType } from "@/types";
import instance from "..";

export default async function getReviewsByMedicineId({
	medicineId,
}: {
	medicineId: number;
}) {
	try {
		return await instance.get<{ content: ReviewItemType[] }>(
			`/reviews/${medicineId}`,
		);
	} catch (err) {
		if (err instanceof AxiosError) {
			console.error(err);
			return err.response;
		}
	}
}
