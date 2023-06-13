import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import useAxiosSequire from "./useAxiosSequire";


const useSingleInstractorCardData = () => {
    const { user } = useContexts();
    const axiosSecure = useAxiosSequire();
    const { data: SingleCardata } = useQuery(['/singleInstractor', user?.email], async () => {
        const res = await axiosSecure.get(`/singleInstractor?email=${user?.email}`);
        return res.data;
      });
      
    return [SingleCardata]
};

export default useSingleInstractorCardData;