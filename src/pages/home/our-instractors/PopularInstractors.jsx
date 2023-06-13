import { useEffect, useState } from "react";
import useManageUser from "../../../hook/useManageUser";
import SinglePopularInstractors from "./SinglePopularInstractors";


const PopularInstractors = () => {
    const [instractors, setInstractors] = useState()
    const user = useManageUser()
    useEffect(() => {
        const instractor = user.filter(user => user.rules === 'instractor');

        // Only update instractors if the user array has changed
        if (JSON.stringify(instractors) !== JSON.stringify(instractor)) {
            setInstractors(instractor);
        }
    }, [user, instractors]);
    if (!instractors) {
        // Add a loading state or return an error message if instractors is undefined
        return <div>Loading...</div>;
    }
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {
                instractors.slice(0, 6).map(item => <SinglePopularInstractors key={item._id} 
                item={item}
                ></SinglePopularInstractors>)
            }        </div>
    );
};

export default PopularInstractors;