import { Link } from "react-router-dom";
import useContexts from "../../../hook/useContexts";



const Navbar = () => {
    const { user, handleLogout } = useContexts()
    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Instructors</Link></li>
        <li><Link to={'/menu'}>Classes</Link></li>
        <li><Link to={'/menu'}>Dashboard </Link></li>
    </>
    const handaleLogouts = () => {
        handleLogout()
    }
    return (
        <div className="navbar bg-black bg-opacity-25 w-7/12 lg:w-11/12 text-white fixed z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={'/'}>
                    <img src="https://mascoshakibcricketacademy.com/app/uploads/2021/02/masco-shakib-cricket-academy.png" className="w-24 h-14" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-teal-500">
                    {navItem}
                </ul>
            </div>
            <div className="">
                {!user && <Link to={'/login'}> <button className="btn-primary"> login</button></Link>}
                {user &&
                    <div className="dropdown ml-24 ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content  rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {user && <Link to={'/'}> <button onClick={handaleLogouts} className="btn-primary w-full"> logout</button></Link>}
                        </ul>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;