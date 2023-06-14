import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaUsers } from 'react-icons/Fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`
                    })
                }
            })
    }

    const handleMakeInstructor=user=>{
        console.log(user);
        fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/users/instructors/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now`
                    })
                }
            })
    }

    // TODO: Admin can delete user on click
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/users/${user._id}`, {
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
                <title>Yoku | Manage User</title>
            </Helmet>
            <div className=' uppercase font-bold text-xl text-teal-700'>
                <h2>Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-10 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-gray-700'>
                            <th>SI</th>
                            <th>Image</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th className='text-center'>User Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td> <h2 className='font-bold'>{user.name}</h2></td>
                                <td> <h2>{user.email}</h2></td>
                                <td> <h2>{user.role}</h2></td>
                                <td>
                                   <div className='flex gap-2'>
                                   {user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className='btn btn-info btn-xs btn-outline' >Admin</button>
                                    }
                                   {user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className='btn btn-info btn-xs btn-outline'>Instructor</button>
                                    }
                                   </div>
                                </td>
                                <td><button onClick={() => handleDelete(user)} className='btn btn-sm text-base-200 bg-red-800'><FaTrashAlt className='w-4 h-4 hover:text-red-800 '></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;