import { useQuery } from "@tanstack/react-query";


const useInstractorsCartData = () => {
    const { data: instractorClass = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/instractor-class')
        return res.json()
    })
    return [instractorClass,refetch]
};

export default useInstractorsCartData;