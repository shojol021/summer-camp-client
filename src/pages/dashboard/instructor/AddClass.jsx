import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";


const AddClass = () => {

    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            instructor: user.displayName,
            instructorEmail: user.email
        }
    });
    const onSubmit = (data) => {
        console.log(data)

        axios.post('http://localhost:5000/class', { ...data, status: 'pending' })
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        title: 'Class Added',
                        text: 'Admin will approve the class',
                        icon: "success",
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
    }

    return (
        <div className="px-12 ">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold ">Add a class</h1>
                </div>
                <div className="card flex-shrink-0 w-full md:w-[700px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="md:flex">
                            <div className="form-control w-full me-5">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="class name" className="input input-bordered" />
                                {errors.name && <span className='text-error'>This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} placeholder="image url" className="input input-bordered" />
                                {errors.image && <span className='text-error'>This field is required</span>}
                            </div>
                        </div>
                        <div className="md:flex">
                            <div className="form-control w-full me-5">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input defaultValue={user.displayName} readOnly disabled type="text" {...register("instructor")} placeholder="instructor name" className="input input-bordered" />

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input defaultValue={user.email} readOnly disabled type="email" {...register("instructorEmail")} placeholder="instructor email" className="input input-bordered" />

                            </div>
                        </div>
                        <div className="flex">
                            <div className="form-control w-full me-5">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number" {...register("availableSeats", { required: true })} placeholder="available seats" className="input input-bordered" />
                                {errors.availableSeats && <span className='text-error'>This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} placeholder="class price" className="input input-bordered" />
                                {errors.price && <span className='text-error'>This field is required</span>}
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Class</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;