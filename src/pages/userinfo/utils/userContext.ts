import React, { createContext, useContext } from "react";
import { UserResult } from "../userInfoType";

interface UserContextType {
	userData?: UserResult;
	setUserData: React.Dispatch<React.SetStateAction<UserResult | undefined>>;
}

const defaultContextValue: UserContextType = {
	userData: undefined,
	setUserData: () => {},
};
export const userContext = createContext<UserContextType>(defaultContextValue);

export const useUserContext = () => {
	const context = useContext(userContext);
	if (!context) {
		throw new Error("유저 데이터 컨텍스트 에러");
	}

	return context;
};
