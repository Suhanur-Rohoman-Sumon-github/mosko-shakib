import { useEffect, useState } from "react";


const useManageUser = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[user])
    return user
};

export default useManageUser;