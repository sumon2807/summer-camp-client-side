import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col mx-auto mt-40 w-1/2 items-center'>
            <h2 className='text-7xl font-extrabold '>Error 404 page</h2>
                <Link to="/"><button className='btn btn-info mt-8'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;