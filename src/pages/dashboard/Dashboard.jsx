import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFolderPlus } from "react-icons/fa";
import { FaBeer, FaChalkboard } from 'react-icons/fa';


const Dashboard = () => {

    const {user} = useContext(AuthContext)
    const [loggedUser, setLoggedUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/users?email=${user.email}`)
            .then(res => {
                setLoggedUser(res.data)
            })
    }, [])
    
    return (
        <div className="min-h-screen">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <h3 className="text-4xl mt-6 ml-6">Welcome, {user?.displayName}</h3>
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-secondary text-base-content">
                        {/* Sidebar content here */}
                        {
                            loggedUser?.role === 'student' && <>
                                <li><Link to='/dashboard/selected-classes'>My Selected Classes</Link></li>
                                <li><Link to='/dashboard/enrolled-classes'>My Enrolled Classes</Link></li>
                            </>
                        }
                        {
                            loggedUser?.role === 'instructor' && <>
                                <li><p><FaFolderPlus /><Link to='/dashboard/add-class'>Add a Class</Link></p></li>
                                <li><p><FaChalkboard /><Link to='/dashboard/my-classes'>My Classes</Link></p></li>
                            </>
                        }
                        {
                            loggedUser?.role === 'admin' && <>
                                <li><Link to='/dashboard/manage-classes'>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manage-users'>Manage Users</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;