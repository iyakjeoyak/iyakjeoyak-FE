import { ReviewType, SupplementType } from "../userinfo/userInfoType";

export type InfoItem = ReviewType | SupplementType;

export interface ItemProps {
	items: InfoItem[];
}
