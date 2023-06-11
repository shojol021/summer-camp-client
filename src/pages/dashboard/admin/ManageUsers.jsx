import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const ManageUsers = () => {

    // const [allUsers, setAllUsers] = useState([])
    // console.log(allUsers)

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await axios.get('http://localhost:5000/allusers')
        return res.data
    })

    // useEffect(() => {
    //     axios.get('http://localhost:5000/allusers')
    //         .then(res => {
    //             setAllUsers(res.data)
    //         })
    // }, [])

    const handleMakeAdmin = (email) => {
        axios.patch('http://localhost:5000/user', { email })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Successfully made admin',
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

                console.log('email', email)
                axios.delete(`http://localhost:5000/instructor/${email}`)
                    .then(res => {
                        console.log(res.data)
                    })
            })
    }

    const handleMakeInstructor = (user) => {
        const email = user.email
        axios.patch('http://localhost:5000/make-instructor', { email })
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: 'Successfully made instructor',
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        const instructor = {
            name: user.name,
            email: user.email,
            image: user.image,
            classes: []
        }

        axios.post('http://localhost:5000/instructor', instructor)
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className="p-12">
            <h3 className='text-center text-3xl'>Users</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allUsers.map((user, idx) => <tr key={user._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user.email)} disabled={user.role === 'admin'} className="btn btn-primary btn-xs">Make Admin</button>
                                </td>
                                <td>
                                    <button onClick={() => handleMakeInstructor(user)} disabled={user.role === 'instructor'} className="btn btn-secondary btn-xs">Make Instructor</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageUsers;