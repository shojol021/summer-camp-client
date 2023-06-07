import { Link } from "react-router-dom";

const Navbar = () => {


    const navItems = <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/'><li>Instructors</li></Link>
        <Link to='/'><li>Classes</li></Link>
        <Link to='/'><li>Dashboard</li></Link>
    </>
    return (
        <div className="navbar bg-gray-800 text-white px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className="w-60" src='logo.png' alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-sm">Login</a>
            </div>
        </div>
    );
};

export default Navbar;