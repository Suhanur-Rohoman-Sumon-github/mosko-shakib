import { useNavigate } from "react-router-dom";
import useContexts from "./useContexts";
import axios from "axios";
import { useEffect } from "react";


const useAxiosSequire = () => {
    const { handleLogout } = useContexts();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            console.log(token)
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // await handleLogout();
                    // navigate('/login');
                    console.log('error');
                }
                return Promise.reject(error);
            }
        );

    }, [handleLogout, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSequire;