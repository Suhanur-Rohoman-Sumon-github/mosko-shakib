import { useEffect, useState } from "react";
import useManageUser from "./useManageUser";



const useInstorFilterData = () => {
   const user = useManageUser()
    const [instractors,setInstractors] = useState()
    useEffect(()=>{
     const  instractor =  user.filter(user=>user.rules === 'instractor')
     setInstractors(instractor)
    },[user,instractors])
    return instractors
    
};

export default useInstorFilterData;