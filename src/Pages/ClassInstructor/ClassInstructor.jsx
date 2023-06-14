import React from 'react';
import { Link } from 'react-router-dom';

const ClassInstructor = ({instructor}) => {
    const {_id, name, image_url, email, classes_taken}=instructor;
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <img src={image_url} className=" w-1/3 rounded-lg shadow-2xl" />
                <div>
                    <h1 className='text-lg font-extrabold'>{name}</h1>
                    <h1 className=' text-sm font-bold'>Class Taken: {classes_taken}</h1>
                    <p className='text-xs'>Contact: {email}</p>
                    <Link to={`/instructorInfo/${_id}`}><button className='btn btn-outline btn-sm btn-info rounded-lg py-2 px-4 mt-4 text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassInstructor;