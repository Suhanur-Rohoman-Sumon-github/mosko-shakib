import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import useAxiosSequire from "./useAxiosSequire";


const useCarts = () => {
    const { user } = useContexts()
    const axiosSecure = useAxiosSequire()
    const { data: carts, refetch } = useQuery({

        queryKey: ['carts', user?.emial],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;

        }

    })
    return [carts, refetch]

};

export default useCarts;