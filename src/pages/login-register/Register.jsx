import bg from '../../assets/bg1.svg'
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                                    <select {...register("gender", { required: true })} className="select select-bordered">
                                        <option disabled selected>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number [optional]</span>
                                </label>
                                <input type="text" {...register("phone", { required: true })} placeholder="re-type password" className="input input-bordered" />

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
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;