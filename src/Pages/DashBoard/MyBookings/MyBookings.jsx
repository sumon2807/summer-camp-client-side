import React from 'react';
import { Helmet } from 'react-helmet';
import useAddClass from '../../../hooks/useAddClass';
import { FaTrashAlt } from 'react-icons/Fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const [booking, refetch] = useAddClass();
    const total = booking.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/bookings/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full px-8'> 
            <Helmet>
                <title>Yoku | My Class</title>
            </Helmet>
            <div className=' uppercase font-bold text-xl flex justify-around gap-10 text-teal-700'>
                <h2>Total Booking Class: {booking.length}</h2>
                <h2>Total Price: ${total}</h2>
            </div>
            <div className="overflow-x-auto mt-10 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold'>
                            <th>SI</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th className=' text-end'>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.class_name}</td>
                                <td className='text-end'>${item.price}</td>
                                <td><Link to="/dashboard/payment"><button className='btn btn-info btn-sm btn-outline'>Pay</button></Link></td>
                                <td><button onClick={() => handleDelete(item)} className='btn btn-sm text-base-200 bg-red-800'><FaTrashAlt className='w-4 h-4 hover:text-red-800 '></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;