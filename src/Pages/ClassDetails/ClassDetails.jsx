import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAddClass from '../../hooks/useAddClass';

const ClassDetails = () => {
    const {user}=useContext(AuthContext);
    const classData = useLoaderData();
    const [, refetch]=useAddClass();
    const { _id, image, class_name, instructor_name, available_seats, price, class_Details } = classData;
    const navigate=useNavigate();
    const location = useLocation();

    const handleBookedClass=classData=>{
        console.log(classData);
        if(user && user.email){
            const bookedItem={bookedItemId: _id, image, price, available_seats, class_name, email: user?.email}
            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(bookedItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Clsaa Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login to Booked the class?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: {from: location}});
                }
              })
        }
    }
    
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row justify-between items-center">
                <div className=' w-1/3'>
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className=' w-2/3'>
                    <h1 className="text-5xl font-bold">{class_name}</h1>
                    <p className="py-6">{class_Details}</p>
                    <h1 className="text-xl font-bold">Instructor: {instructor_name}</h1>
                    <h1 className="text-lg ">Available Seats: {available_seats}</h1>
                    <h1 className="text-sm font-bold">Price: ${price}</h1>
                    <Link><button onClick={()=>handleBookedClass(classData)} className="btn btn-success btn-outline mt-8">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;