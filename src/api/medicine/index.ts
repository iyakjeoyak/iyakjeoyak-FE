import getMdPickedMedicines from "./getMdPickedMedicines";
import getMedicineById from "./getMedicineById";
import getMedicines from "./getMedicines";
import { queryOptions } from "@tanstack/react-query";

const medicineQueryOptions = {
	getMedicines: ({ page, size }: { page: number; size: number }) =>
		queryOptions({
			queryKey: ["medicine", "medicines"],
			queryFn: () => getMedicines(page, size),
			initialData: {
				data: [],
				number: 0,
				size: 0,
				totalPages: 0,
				totalElement: 0,
				numberOfElement: 0,
			},
		}),
	getMedicineById: ({ medicineId }: { medicineId: number }) =>
		queryOptions({
			queryKey: ["medicine", "medicines", medicineId],
			queryFn: () => getMedicineById({ medicineId }),
			initialData: {
				id: 0,
				prdlst_NM: "",
				bssh_NM: "",
				heartCount: 0,
				grade: 0,
				iftkn_ATNT_MATR_CN: "",
				hashtags: [{ id: 0, name: "" }],
				reviewCount: 0,
				primary_FNCLTY: "",
				indiv_RAWMTRL_NM: "",
				ntk_MTHD: "",
				isBookMark: false,
				isHeart: false,
				reviewList: [],
			},
		}),
	getMdPickedMedicines: () =>
		queryOptions({
			queryKey: ["medicine", "medicines", "md"],
			queryFn: () => getMdPickedMedicines(),
			initialData: [],
		}),
};

export default medicineQueryOptions;
