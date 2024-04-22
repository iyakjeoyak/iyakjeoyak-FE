import { useLocation } from "react-router-dom";

const useGetURLSearch = (key: string) => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const value = searchParams.get(key);

	return value;
};

export default useGetURLSearch;
