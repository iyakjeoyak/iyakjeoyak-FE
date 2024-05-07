import { UserEdit } from "../UI/UserInfoEdit";
import { UserResult } from "../userInfoType";

export default function transformUserResultToUserSubmmit(
	userResult: UserResult,
): UserEdit {
	return {
		nickname: userResult.username,
		gender: userResult.gender,
		age: userResult.age,
		introduce: userResult.introduce,
		hashtagResultList: userResult.hashtagList?.map((tag) => tag.id),
		image: userResult.image
			? {
					id: userResult.image.id,
					fullPath: userResult.image.fullPath,
				}
			: undefined,
	};
}
