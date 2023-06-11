import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const MyClasses = () => {

    const { user } = useContext(AuthContext)
    const [classes, setClasses] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/user-classes?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setClasses(res.data)

            })
    }, [])

    return (
        <div className="p-12">
            <h3 className="text-center text-3xl">My classes</h3>

            <div className="grid grid-cols-2">
                {
                    classes &&
                    classes.map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={cls.image} onError={(e) => e.target.src = 'https://i.postimg.cc/zXgFTQTx/images.jpg'} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {cls.name}
                                <div className="badge badge-secondary">${cls.price}</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{cls.status}</div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyClasses;