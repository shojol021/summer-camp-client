import { useForm } from 'react-hook-form';
import bg from '../../assets/Sprinkle.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {emailLogin} = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        emailLogin(data.email, data.passowrd)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser)
            navigate('/')
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-error'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("passowrd", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.passowrd && <span className='text-error'>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <p className='font-semibold text-white'>New to this website? <Link to='/register'><span className='text-info'>Sign up</span></Link></p>
                <SocialLogin></SocialLogin>
            </div>
            
        </div>
    );
};

export default Login;