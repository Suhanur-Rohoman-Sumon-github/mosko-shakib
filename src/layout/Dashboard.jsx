import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaRegShareSquare, FaMeteor,FaHome,FaUserTie,FaBookOpen,FaTasks } from "react-icons/fa";
// TODO:add navlink
const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  mx-4 my-4">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  pt-32 w-80 h-screen  text-teal-500 card-background  ">
                    {/* Sidebar content here */}
                    <li ><Link to={'/dashbord/selected-class'}><FaRegShareSquare /> My Selected Classes</Link></li>
                    <li ><Link to={'/dashbord/home'}><FaMeteor /> My Enrolled Classes</Link></li>
                    <div className="divider">OR</div>
                    <li><Link to={'/'}><FaHome />Home</Link></li>
                    <li><Link to={'/instractor'}><FaUserTie />Instructors</Link></li>
                    <li><Link to={'/classes'}><FaBookOpen />Classes</Link></li>
                    <li><Link to={'/dashbord'}><FaTasks />Dashboard </Link></li>
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;