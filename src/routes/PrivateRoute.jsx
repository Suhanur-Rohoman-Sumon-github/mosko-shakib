import { useNavigate } from "react-router-dom";
import useContexts from "../hook/useContexts";


const PrivateRoute = ({children}) => {
    const navigat = useNavigate()
    const {user,loading } = useContexts()
    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    else{
        navigat('/login')
    }
    return (
        
    <div></div>
    );
};

export default PrivateRoute;