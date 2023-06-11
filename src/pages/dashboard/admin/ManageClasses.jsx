import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const ManageClasses = () => {

    // const [allClasses, setAllClasses] = useState('')

    const {data: allClasses = [], refetch} = useQuery(['classes'], async() => {
        const res = await axios.get('http://localhost:5000/allclasses')
        console.log(res)
        return res.data
    })

    // useEffect(() => {
    //     axios.get('http://localhost:5000/allclasses')
    //         .then(res => {
    //             console.log(res)
    //             setAllClasses(res.data)
    //         })
    // }, [])

    const handleApprove = (id) => {
        axios.patch(`http://localhost:5000/make-approved/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    title: "Approved",
                    text: "This class in now published",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

    const handleDeny = (id) => {
        axios.patch(`http://localhost:5000/deny/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    title: "Denied",
                    text: "The class has been denied",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }

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
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" 
                                                onError={(e) => e.target.src = 'https://i.postimg.cc/zXgFTQTx/images.jpg'}/>
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
                                <td>{cls.status}</td>
                                <th>
                                    <div className="btn-group btn-group-vertical">
                                        <button onClick={() => handleApprove(cls._id)} disabled={cls.status === 'approved' || cls.status === 'denied'} className="btn btn-xs btn-primary">Approve</button>
                                        <button onClick={() => handleDeny(cls._id)} className="btn btn-xs btn-secondary" disabled={cls.status === 'approved' || cls.status === 'denied'}>Deny</button>
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