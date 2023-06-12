import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaRegShareSquare, FaMeteor, FaHome, FaUserTie, FaBookOpen, FaPenNib, FaRegWindowMaximize, FaRegCalendarCheck, FaRegIdCard } from "react-icons/fa";
import useCarts from '../hook/useCarts';
const isinstractor = false
const isadmin = false
// TODO:add navlink
// TODO:make google sin in user save in the database
const Dashboard = () => {
    const [carts] = useCarts()
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

                <ul className="menu   w-80 h-screen  text-teal-500 card-background  ">
                    {/* Sidebar content here */}
                    <Link to={'/'}>
                        <img src="https://mascoshakibcricketacademy.com/app/uploads/2021/02/masco-shakib-cricket-academy.png" className="w-full h-44" alt="" />
                    </Link>
                    {isadmin ? <>
                        <h1 className='text-primary text-center'>Admin Dashboard</h1>
                        <li ><Link to={'/dashbord/manage-class'}><FaRegCalendarCheck /> Manage Classes </Link></li>
                        <li ><Link to={'/dashbord/manage-user'}><FaRegIdCard /> Manage Users</Link></li></> : isinstractor ? <>

                            <h1 className='text-primary text-center'>instractor Dashboard</h1>
                            <li ><Link to={'/dashbord/add-class'}><FaPenNib /> add a class</Link></li>
                            <li ><Link to={'/dashbord/my-classes'}><FaRegWindowMaximize /> My Classes</Link></li> </> :
                        <>
                            <h1 className='text-primary text-center'>user Dashboard</h1>
                            <li ><Link to={'/dashbord/selected-class'}><FaRegShareSquare /> My Selected Classes <div className="badge badge-secondary">{carts ? carts.length : 0}</div></Link></li>
                            <li ><Link to={'/dashbord/home'}><FaMeteor /> My Enrolled Classes</Link></li></>}

                    <div className="divider">OR</div>
                    <li><Link to={'/'}><FaHome />Home</Link></li>
                    <li><Link to={'/instractor'}><FaUserTie />Instructors</Link></li>
                    <li><Link to={'/classes'}><FaBookOpen />Classes</Link></li>
                </ul>


            </div>
        </div>
    );
};

export default Dashboard;