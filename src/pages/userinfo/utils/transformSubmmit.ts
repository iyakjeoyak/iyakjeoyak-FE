import { UserEdit } from "../UI/UserInfoEdit";
import { UserResult } from "../userInfoType";

export default function transformUserResultToUserSubmmit(
	userResult: UserResult,
): UserEdit {
	return {
		nickname: userResult.nickname,
		gender: userResult.gender,
		age: userResult.age,
		introduce: userResult.introduce,
		hashtagResultList: userResult.hashtagList?.map((tag) => tag.id),
	};
}
