import React from 'react';
import { Link } from 'react-router-dom';

const PopularClassItem = ({ item }) => {
    const {_id, image, class_name, instructor_name, available_seats } = item;
    return (
        <div className=' group relative items-center overflow-hidden justify-center cursor-pointer rounded-lg'>
            <img className='h-96 w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' src={image} alt="" />
            <div className=' absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
            <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center mt-32'>
                <h1 className='text-xl font-bold text-white'>{class_name}</h1>
                <h1 className='text-lg font-bold text-white'>{instructor_name}</h1>
                <p className='text-sm text-white'>Available Seats: {available_seats}</p>
                <Link to={`/classDetails/${_id}`}><button className='btn btn-outline btn-info btn-sm rounded-lg py-2 px-4 mt-4 text-white'>See more</button></Link>
            </div>
        </div>
    );
};

export default PopularClassItem;