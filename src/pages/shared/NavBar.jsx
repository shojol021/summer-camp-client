import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => console.log('logged Out'))
    }

    const navItems = <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/instructor'><li>Instructors</li></Link>
        <Link to='/classes'><li>Classes</li></Link>
        {user && <Link to='/dashboard'><li>Dashboard</li></Link>}
    </>
    return (
        <div className="navbar bg-gray-800 md:text-primary md:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 z-20 bg-gray-700 text-primary pl-6 space-y-2">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className="w-40 lg:w-60" src='logo.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <><div>
                        <img title={`${user.displayName}`} className="w-12 me-4" src={user?.photoURL} alt="" />
                    </div>
                    <Link to='/login' onClick={handleLogOut} className="btn btn-error btn-xs md:btn-sm">Logout</Link></> :
                    <Link to='/login' className="btn btn-primary btn-xs md:btn-sm">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;