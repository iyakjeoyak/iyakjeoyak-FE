export const getGoogleAuthUrl = () => {
	const clientId = import.meta.env.VITE_GOGLE_CLIENT_ID;
	const redirectUri = import.meta.env.VITE_GOGLE_REDIRECT_URI;
	return `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid email profile`;
};

export const handleGoogleLogin = () => {
	window.location.href = getGoogleAuthUrl();
};
