import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";


const useCarts = () => {
    const {user} = useContexts()
    const token = localStorage.getItem('acsses-token')
    const {data:carts,refetch}=useQuery({
        queryKey:['carts',user?.emial],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                    authorization:`bearar ${token}`
                  }
            })
            return res.json()
        }
        
    })
    return [carts,refetch]
    
};

export default useCarts;