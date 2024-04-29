interface PathNameType {
	[key: string]: string;
}
export const pathName: PathNameType = {
	"/login": "로그인",
	"/signup": "회원가입",
	"/search": "제품조회",
	"/my-page": "마이페이지",
};

export const routerpaths: PathNameType = {
	ONBOARDING: "/",
	HOME: "/home",
	SEARCH: "/search",
	DETAILIDPAGE: "/detail/:id",
	LOGIN: "/login",
	KAKAOLOGIN: "/auth/kakao",
	GOOGLELOGIN: "/auth/google",
	SIGNUP: "/signup",
	FAME: "/fame",
	USERINFO: "/userinfo",
	POINTHISTORY: "/userinfo/point",
	REVIEWHISTORY: "/userinfo/review",
	SUPPLEMENTHISTORY: "/userinfo/user-supplement",
	NOTFOUND: "/notfound",
};
