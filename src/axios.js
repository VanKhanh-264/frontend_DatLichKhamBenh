import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true
});

instance.interceptors.response.use(
    (response) => {       // Thrown error for request with OK status code
        const { data } = response;
        return response.data;
    }    
);

export default instance;
