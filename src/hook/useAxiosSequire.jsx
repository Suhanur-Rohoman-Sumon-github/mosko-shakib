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
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await handleLogout();
          navigate('/login');
        console.log(error)
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [handleLogout, navigate]);

  return axiosSecure;
};

export default useAxiosSequire;