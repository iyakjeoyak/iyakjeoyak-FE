import { MedicineItemType } from "@/types";
import axios from "../axiosConfig";

/*
{
  "id": 3,
  "heartCount": 1,
  "grade": 3.5,
  "categories": [
    {
      "id": 83,
      "name": "비타민B1"
    },
    {
      "id": 62,
      "name": "비타민B6"
    },
    {
      "id": 68,
      "name": "비타민B2"
    },
    {
      "id": 81,
      "name": "비오틴"
    },
    {
      "id": 44,
      "name": "엽산"
    },
    {
      "id": 76,
      "name": "판토텐산"
    },
    {
      "id": 7,
      "name": "비타민B12"
    },
    {
      "id": 30,
      "name": "나이아신"
    }
  ],
  "hashtags": [
    {
      "id": 31,
      "name": "신경관"
    },
    {
      "id": 4,
      "name": "혈액"
    },
    {
      "id": 21,
      "name": "비타민"
    },
    {
      "id": 22,
      "name": "호모시스테인"
    },
    {
      "id": 34,
      "name": "에너지"
    },
    {
      "id": 9,
      "name": "엽산"
    },
    {
      "id": 29,
      "name": "아미노산"
    },
    {
      "id": 37,
      "name": "대사"
    },
    {
      "id": 25,
      "name": "단백질"
    }
  ],
  "indiv_RAWMTRL_NM": "비타민B1질산염(고시형), 피리독신염산염(고시형), 판토텐산칼슘(고시형), 니코틴산아미드(고시형), 비타민B2(고시형), 엽산(고시형), 비오틴 혼합분말, 비타민B12, 혼합제제",
  "bssh_NM": "코스맥스엔비티(주)",
  "prdlst_NM": "활력 에너지 비타민B 맥스",
  "primary_FNCLTY": "[비타민B1]\n①탄수화물과 에너지 대사에 필요\n[판토텐산]\n①지방, 탄수화물, 단백질 대사와 에너지 생성에 필요\n[비타민B6]\n①단백질 및 아미노산 이용에 필요\n②혈액의 호모시스테인 수준을 정상으로 유지하는데 필요\n[나이아신]\n①체내 에너지 생성에 필요\n[비타민B2]\n①체내 에너지 생성에 필요\n[비오틴]\n①지방, 탄수화물, 단백질 대사와 에너지 생성에 필요\n[비타민B12]\n①정상적인 엽산 대사에 필요\n[엽산]\n①세포와 혈액생성에 필요\n②태아 신경관의 정상 발달에 필요\n③혈액의 호모시스테인 수준을 정상으로 유지하는데 필요",
  "ntk_MTHD": "1일 1회, 1회 1정을 물과 함께 섭취하십시오.",
  "iftkn_ATNT_MATR_CN": "이상사례 발생 시 섭취를 중단하고 전문가와 상담할 것"
}
	 */

export default async function getMedicineById({medicineId}:{medicineId: number}) {
	const response = await axios.get<MedicineItemType>(`/medicine/${medicineId}`);
	return response.data;
}
