import axios from "../axiosConfig";

interface HashtagsType {
    id: number,
    name: string,
}

/*
인터셉터에서 응답값을 어떻게 처리할지에 따라 달라짐
 response.data = [ {
    "id": 2,
    "name": "전립선"
  },
  {
    "id": 3,
    "name": "갱년기"
  }]
*/

export default async function getHashtags() {
	const response = await axios.get<HashtagsType[]>(`/hashtag`);
	return response.data;
}
