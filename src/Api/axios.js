import axios from "axios";
const axiosInstance = axios.create({
	//for local instance of firbase functions
	// baseURL: "http://127.0.0.1:5001/e-clone-a249d/us-central1/api",
	baseURL: "http://127.0.0.1:5050",
	//deployed version of amazon server onrender.com
	// baseURL: "https://amazon-api-deploy-1-4vyv.onrender.com/",
});
export { axiosInstance };
