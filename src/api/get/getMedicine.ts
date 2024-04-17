import { AxiosError } from "axios";
import { MedicineItemType } from "@/types/indes";
import axiosInstance from "..";

const getMedicine = async () => {
	try {
		const response = await axiosInstance.get<{ content: MedicineItemType[] }>(
			``,
		);
		return response.data.content;
	} catch (err) {
		if (err === AxiosError) {
			console.error(err);
			return err.response;
		}
	}
};

export default getMedicine;
