import { useQuery } from "@tanstack/react-query";
import useAxiosSequire from "./useAxiosSequire";
import useContexts from "./useContexts";


const usePaymentsData = () => {
  const { user } = useContexts();
  const axiosSecure = useAxiosSequire();
  const { data: payments, refetch, isLoading } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    }
  });

  return [payments, refetch, isLoading ] ; // Return an object instead of an array
  
};

export default usePaymentsData;
