import axios from "axios";
import { useEffect, useState } from "react";


const ManageClasses = () => {

    const [allClasses, setAllClasses] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5000/allclasses')
            .then(res => {
                console.log(res)
                setAllClasses(res.data)
            })
    }, [])

    return (
        <div className="p-12">
            <h3 className="text-center text-3xl">Manage Classes</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Available</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allClasses.length > 0 &&
                            allClasses.map((cls, idx) => <tr key={cls._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{cls.name}</div>
                                            <div className=" text-info opacity-80">Price ${cls.price}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {cls.instructor}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{cls.instructorEmail}</span>
                                </td>
                                <td>{cls.availableSeats}</td>
                                <td>{cls.status ? cls.status : 'Approved'}</td>
                                <th>
                                    <div className="btn-group btn-group-vertical">
                                        <button className="btn btn-xs btn-primary">Approve</button>
                                        <button className="btn btn-xs btn-secondary">Deny</button>
                                        <button className="btn btn-xs">Send Feedback</button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;