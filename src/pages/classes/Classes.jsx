import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const Classes = () => {

    const {user} = useContext(AuthContext)
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/classes')
            .then(res => {
                console.log(res.data)
                setClasses(res.data)
            })
    }, [])

    const handleSelectClass = (cls) => {
        axios.post('http://localhost:5000/select', {...cls, email: user.email})
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Class Selected',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

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
                                <button onClick={() => handleSelectClass(cls)} className="btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Classes;