import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassInstructor from '../ClassInstructor/ClassInstructor';

const AllInstructor = () => {
    const instructors=useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-2 pt-20 mb-10'>
           {
            instructors.map(instructor=> <ClassInstructor
            key={instructor._id}
            instructor={instructor}
            ></ClassInstructor>)
           }
        </div>
    );
};

export default AllInstructor;