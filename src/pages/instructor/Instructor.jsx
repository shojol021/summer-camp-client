import axios from "axios";
import { useEffect, useState } from "react";


const Instructor = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/instructors')
            .then(res => {
                console.log(res.data)
                setInstructors(res.data)
            })
    }, [])

    return (
        <div className="grid grid-cols-3 p-12 gap-2">
            {
                instructors.map(instructor => <>
                    <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">

                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title">{instructor.name}</h2>
                                <div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={instructor.image} />
                                    </div>
                                </div>
                            </div>
                            {instructor.classes.map((name, idx) => <p key={idx}>{name}</p>) }
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">See Classes</button>
                            </div>

                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Instructor;