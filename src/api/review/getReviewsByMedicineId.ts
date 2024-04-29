import { ResponsePagenation, ReviewItemType } from "@/types";

import axios from "../axiosConfig";

export default async function getReviewsByMedicineId({
	medicineId,
  page,
  size,
}: {
	medicineId: number;
  page:number;
  size:number;
}) {

		const response = await axios.get<ResponsePagenation<ReviewItemType>>(
			`/review?page=${page}&size=${size}&medicineId=${medicineId}`,
		);
    return response.data;
}
