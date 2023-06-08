import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext)
    
    const handleGoogleLogin = () => {
        googleLogin()
        .then(res => {
            const loggedUser = res.user
            console.log(loggedUser)
        })
    }
    return (
        <button className="w-full max-w-md"><div onClick={handleGoogleLogin} className="bg-secondary px-5 py-2 rounded w-full text-center">
        Or, Signin with <span className='text-info'>Google</span>
    </div></button>
    );
};

export default SocialLogin;