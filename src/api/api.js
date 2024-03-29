import axios from 'axios';

const api = axios.create({
	baseURL: 'https://backend-proyecto-71i.onrender.com',
});




export default api;




/* import axios from 'axios';

const pruebaApi = axios.create({
	baseURL: 'https://backend56i.onrender.com',
});

pruebaApi.interceptors.request.use((config) => {
	config.headers = {
		'x-token': localStorage.getItem('token'),
	};
	return config;
});

export default pruebaApi; */
