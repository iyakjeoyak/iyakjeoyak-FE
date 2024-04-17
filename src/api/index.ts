import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "#",
	timeout: 5000,
});

export default axiosInstance;
