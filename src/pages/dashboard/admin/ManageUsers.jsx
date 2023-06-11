import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const ManageUsers = () => {

    const {user} = useContext(AuthContext)
    
    return (
        <div className="p-12">
            <h3 className="text-3xl text-center">Manage Users</h3>
        </div>
    );
};

export default ManageUsers;