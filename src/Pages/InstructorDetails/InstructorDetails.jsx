import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/Fa';

const InstructorDetails = () => {
    const details = useLoaderData();
    const { _id, name, image_url, email, classes_taken, details_info, position } = details;
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row justify-between items-center">
                <div className=' w-1/3'>
                    <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className=' w-2/3'>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h1 className="text-xl font-semibold">{position}</h1>
                    <p className="py-6">{details_info}</p>
                    <h1 className="text-xl font-bold">Total Class Taken: {classes_taken}</h1>
                    <h1 className="text-xs font-bold">Contact: {email}</h1>
                    <div className='flex gap-2 mt-4'>
                        <a href=""><FaFacebook></FaFacebook></a>
                        <a href=""><FaTwitter></FaTwitter></a>
                        <a href=""> <FaInstagram></FaInstagram></a>
                    </div>
                    <Link><button className="btn btn-success btn-outline mt-8">Enrole Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorDetails;