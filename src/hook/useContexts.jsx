import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useContexts = () => {
    return useContext(AuthContext)
};

export default useContexts;