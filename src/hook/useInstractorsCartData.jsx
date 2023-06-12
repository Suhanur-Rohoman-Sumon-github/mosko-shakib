import { useEffect, useState } from "react";


const useInstractorsCartData = () => {
    const [instractorClass, setInstractorClass] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/instractor-class')
            .then(res => res.json())
            .then(data => setInstractorClass(data))
    }, [])
    return [instractorClass]
};

export default useInstractorsCartData;