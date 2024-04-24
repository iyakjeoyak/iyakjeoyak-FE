import { AxiosError } from "axios";
import { MedicineItemType } from "@/types";
import instance from "..";

export default async function getMedicines() {
	try {
		return await instance.get<{ content: MedicineItemType[] }>(`/medicines`);
	} catch (err) {
		if (err instanceof AxiosError) {
			console.error(err);
			return err.response;
		}
	}
}
