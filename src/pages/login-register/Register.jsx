import { useContext, useState } from 'react';
import bg from '../../assets/bg1.svg'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';
import axios from 'axios';

const Register = () => {
    const {emailSignUp, updateUser} = useContext(AuthContext)
    const [isMatch, setisMatch] = useState(false)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setisMatch(false)
        console.log(data)
        const email = data.email;
        const passowrd = data.passowrd
        const confirm = data.confirm

        if(passowrd !== confirm){
            setisMatch(true)
            return
        }

        console.log(email, passowrd)
        emailSignUp(email, passowrd)
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser)
            Swal.fire({
                icon: 'success',
                title: 'Successfully registerd',
                showConfirmButton: false,
                timer: 1500
              })
              updateUser(data.name, data.photo)
              .then(() => {
                console.log('profile updated')
                const savedUser = {
                    name: data.name,
                    image: data.photo,
                    email: data.email,
                    gender: data?.gender || null,
                    phone: data?.phone || null,
                    role: 'student'
                }
                axios.post('http://localhost:5000/users', savedUser)
                .then(res => {
                    console.log(res.data)
                    navigate('/')
                })
              })
              .catch((error) => console.log(error))
              
        })
        .catch(error => console.log(error))

    };

    return (
        <div className="hero min-h-screen bg-base-200 px-12" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold ">Registration</h1>
                </div>
                <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="md:flex justify-between space-x-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-error'>This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-error'>This field is required</span>}
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-error'>This field is required</span>}
                        </div>
                        <div className="md:flex justify-between space-x-5">
                            <div className="form-control w-full">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Select gender [optional]</span>
                                    </label>
                                    <select defaultValue="Select" {...register("gender", { required: true })} className="select select-bordered">
                                        <option disabled>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number [optional]</span>
                                </label>
                                <input type="text" {...register("phone", { required: true })} placeholder="phone number" className="input input-bordered" />

                            </div>
                        </div>
                        <div className="md:flex justify-between space-x-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("passowrd", { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*[!@#$%^&*(),.?":{}|<>]+$/ })} placeholder="password" className="input input-bordered" />
                                {errors.passowrd?.type === 'required' && <span className='text-error'>This field is required</span>}
                                {errors.passowrd?.type === 'pattern' && <span className='text-error'>Lowercase, upppercase, digit and special charecter</span>}
                                {errors.passowrd?.type === 'minLength' && <span className='text-error'>At least 6 characters</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" {...register("confirm", { required: true })} placeholder="re-type password" className="input input-bordered" />
                                {errors.confirm && <span className='text-error'>This field is required</span>}
                                {isMatch && <p className='text-error'>Password did not match</p>}
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                <p className='font-semibold text-white'>Already have an account? <Link to='/login'><span className='text-info'>Login here</span></Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;