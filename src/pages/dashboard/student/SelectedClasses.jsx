import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";


const SelectedClasses = () => {

    const { user } = useContext(AuthContext)
    const [classes, selectClasses] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/select?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                selectClasses(res.data)
            })
    }, [])
    return (
        <div className="grid grid-cols-2 gap-5 p-12">
            {
                classes.map(cls =>
                    <div key={cls._id} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={cls.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{cls.name}</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <Link to='/dashboard/payment'><button className="btn btn-primary">Pay Now</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default SelectedClasses;