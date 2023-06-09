import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <p className="h-screen flex justify-center items-center text-4xl">Loading...</p>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}}></Navigate>
};

export default PrivateRoute;