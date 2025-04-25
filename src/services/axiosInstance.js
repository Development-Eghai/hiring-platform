import axios from "axios";
// import store from '../../Store.js';
// import { handleRefereshToken } from "../Redux/Action/commonAction.js";


// const API_URL = process.env.API_URL;


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // const state = store.getState();
        // const token = state?.commonState?.token;

        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }

        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log("Axios Interceptor Error:", error);
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
        
            if (error.response.data?.message === "Token expired") {
                try {
                    
                    // await store.dispatch(handleRefereshToken());
                    return axiosInstance(originalRequest); 
                    // await new Promise(resolve => setTimeout(resolve, 500));
                    // const state = store.getState();
                    // const newToken = state?.commonState?.token;
        
                    // console.log("newToken:", newToken);
        
                    // if (newToken) {
                    //     originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    //     return axiosInstance(originalRequest); 
                    // }
                } catch (err) {
                    return Promise.reject(err);
                }
            }
        }
        
    
        if (error.code === "ERR_BAD_REQUEST") {
            return Promise.reject({
                ...error,
                response: {
                    ...error.response,
                    data: {
                        success: false,
                        data: {},
                        message: error.response?.data?.message || "ERR_BAD_REQUEST"
                    }
                }
            });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;


