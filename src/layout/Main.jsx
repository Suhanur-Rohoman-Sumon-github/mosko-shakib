import Footer from "../pages/shered/footer/Footer";
import Navbar from "../pages/shered/navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;