import { useQuery } from "@tanstack/react-query";
import useAxiosSequire from "./useAxiosSequire";

const useInstractorsCartData = () => {
  const axiosSecure = useAxiosSequire();
  const { data: instractorClass = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/instractor-class');
    return res.data;
  });

  return [instractorClass, refetch];
};

export default useInstractorsCartData;