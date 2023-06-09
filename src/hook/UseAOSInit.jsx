import { AOS } from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';


const UseAOSInit = () => {
    useEffect(() => {
        AOS.init();
      }, []);
};

export default UseAOSInit;