import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content card-background mx-4 my-4">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-screen mt-4 card-text-secondary  card-background ml-4  text-base-content">
                    {/* Sidebar content here */}
                    <li ><Link to={'/dashbord/home'}>My Selected Classes</Link></li>
                    <li ><Link to={'/dashbord/home'}>My Enrolled Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;