import instance from "..";

interface CategoriesType {
	id: number;
	name: string;
}

/*
인터셉터에서 응답값을 어떻게 처리할지에 따라 달라짐
 response.data = [
  {
    "id": 1,
    "name": "미강주정추출물"
  },
  {
    "id": 2,
    "name": "N-아세틸글루코사민"
  },
  {
    "id": 3,
    "name": "키토산/키토올리고당"
  }]
*/

export default async function getCategories() {
	const response = await instance.get<CategoriesType[]>(`/category`);
	return response.data;
}
