
import { useEffect, useState } from "react";
const useFilterData = () => {
   const [populars,setPopulars] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/popular-classes')
        .then(res=>res.json())
        .then(data=>setPopulars(data))
   },[])
   return [populars]
};

export default useFilterData;