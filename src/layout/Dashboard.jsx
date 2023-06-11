import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaRegShareSquare,FaMeteor } from "react-icons/fa";
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
                <ul className="menu p-4 w-80 h-screen  text-teal-500 card-background  ">
                    {/* Sidebar content here */}
                    <li ><Link to={'/dashbord/selected-class'}><FaRegShareSquare /> My Selected Classes</Link></li>
                    <li ><Link to={'/dashbord/home'}><FaMeteor /> My Enrolled Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;