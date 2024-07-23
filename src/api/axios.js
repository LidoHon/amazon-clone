import axios from 'axios';

const axiosInstance = axios.create({
	// local instance url
	// baseURL: 'http://localhost:3000',

	// deployed url
	baseURL: 'https://amazon-api-deploy-ur37.onrender.com',
});
export { axiosInstance };
