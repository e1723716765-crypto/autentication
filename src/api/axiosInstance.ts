import axios from "axios"  ;

export const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", timeout: 5000, 
    headers: {ContentType: "application/json"}  
});

//interceptor request
axiosInstance.interceptors.request.use(
    (config) => { return config; },
    (error) => { return Promise.reject(error); }
);
        // You can modify the request config here, e.g., add authentication tokens  return config;
//interceptor response
axiosInstance.interceptors.response.use(
    (response) => { return response; },
    (error) => { console.error("API Error:", error.message );
        return Promise.reject(error); }
);