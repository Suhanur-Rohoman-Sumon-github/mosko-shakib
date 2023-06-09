import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>CONTACT us</Link></li>
        <li><Link to={'/menu'}>DASHBOARD</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/shop'}>Our Shop</Link></li>
        <li><Link to={'/shop'}> <FaCartArrowDown /> </Link></li>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link >
                    <img src="https://mascoshakibcricketacademy.com/app/uploads/2021/02/masco-shakib-cricket-academy.png" className="w-24 h-14" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-teal-500">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn-primary"> login</button>
            </div>
        </div>
    );
};

export default Navbar;