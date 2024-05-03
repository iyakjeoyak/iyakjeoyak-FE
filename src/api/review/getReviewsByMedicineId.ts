import { ResponsePagenation, ReviewItemType } from "@/types";

import axios from "../axiosConfig";

export default async function getReviewsByMedicineId({queryParams}:{queryParams: string}) {

		const response = await axios.get<ResponsePagenation<ReviewItemType>>(
			`/review${(queryParams)}`,
		);
    return response.data;
}
