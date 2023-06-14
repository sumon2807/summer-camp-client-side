import React from 'react';
import { Link } from 'react-router-dom';

const AllClass = ({ classItem }) => {
    const { _id, class_name, image, instructor_name, available_seats, price } = classItem;
    return (
        <div className="hero bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row justify-around">
                <img src={image} className=" w-1/3 rounded-lg shadow-2xl" />
                <div>
                    <h1 className='text-lg font-extrabold'>{class_name}</h1>
                    <h1 className=' text-xs font-bold'>{instructor_name}</h1>
                    <p className='text-xs'>Available Seats: {available_seats}</p>
                    <Link to={`/classDetails/${_id}`}><button className='btn btn-outline btn-sm btn-info rounded-lg py-2 px-4 mt-4 text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllClass;