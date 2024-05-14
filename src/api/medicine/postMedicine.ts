import axios from "../axiosConfig";

/*
{
  "id": 0,
  "heartCount": 0,
  "grade": 0,
  "categories": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "hashtags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "indiv_RAWMTRL_NM": "string",
  "bssh_NM": "string",
  "prdlst_NM": "string",
  "primary_FNCLTY": "string",
  "ntk_MTHD": "string",
  "iftkn_ATNT_MATR_CN": "string"
}
*/
interface PostMedicineType {
	id: number;
}

export default async function postMedicine(body: PostMedicineType) {
	const response = await axios.post(`/medicines`, { body });
	return response.data;
}
