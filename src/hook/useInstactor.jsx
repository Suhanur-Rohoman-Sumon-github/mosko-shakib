import  { useEffect, useState } from 'react';

const useInstactor = () => {
   const [instactors,setInstactors] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/instactors')
    .then(res=>res.json())
    .then(data=>setInstactors(data))
   },[])
   return instactors
};

export default useInstactor;