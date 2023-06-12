import { useQuery } from "@tanstack/react-query";
import useAxiosSequire from "./useAxiosSequire";


const usePaymentsData = () => {
    const axiosSecure = useAxiosSequire()
    const { data: payments = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/payments');
        return res.data;
      });
    
    return [payments, refetch]
};

export default usePaymentsData;