import { useEffect } from "react";
import Footer from "../pages/shered/footer/Footer";
import Navbar from "../pages/shered/navbar/Navbar";
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;