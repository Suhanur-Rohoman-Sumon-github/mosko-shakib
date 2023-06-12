import { useQuery } from "@tanstack/react-query";
import useAxiosSequire from "./useAxiosSequire";


const useUser = () => {
    const axiosSecure = useAxiosSequire();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
    return res.data;
    })
    return [users,refetch]
};

export default useUser;