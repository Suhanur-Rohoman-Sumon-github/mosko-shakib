import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import useAxiosSequire from "./useAxiosSequire";


const useAdmin = () => {
    const {user} = useContexts()
    const axiosSecure = useAxiosSequire()
  const {data:isAdmin,isLoading:loading} = useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        return res.data.admin
    }
  })
  return [isAdmin,loading]
};

export default useAdmin;