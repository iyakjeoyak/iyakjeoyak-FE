import { queryOptions } from "@tanstack/react-query";
import getMedicines from "./getMedicines";
import getMedicineById from "./getMedicineById";

const medicineQueryOptions = {
	getMedicines: () =>
		queryOptions({
			queryKey: ["medicine", "medicines"],
			queryFn: getMedicines,
		}),
	getMedicineById: ({ medicineId }: { medicineId: number }) =>
		queryOptions({
			queryKey: ["medicine", "medicines", medicineId],
			queryFn: () => getMedicineById({ medicineId }),
		}),
};

export default medicineQueryOptions;
