import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddClasses = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
console.log(errors);
    const onSubmit = data => {
        const updatedData={...data, instructorEmail:user?.email, instructorName:user?.displayName}
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div className='w-full my-8'>
            <form onSubmit={handleSubmit(onSubmit)} className='px-8'>
                <h2 className='text-3xl font-bold'>Add Classes</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Class name</span>
                    </label>
                    <input type="text" name='className' {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered w-1/2" />
                    
                    <label className="label">
                        <span className="label-text font-bold">Instructor Name</span>
                    </label>
                    <input type="text" name='instructorName' {...register("instructorName", { required: false })} value={user.displayName} disabled={true} className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Instructor Email</span>
                    </label>
                    <input type="text" name='instructorEmail' {...register("instructorEmail", { required: false })} value={user.email} disabled={true} className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Available Seat</span>
                    </label>
                    <input type="number" name='seats' {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <input type="number" name='price' {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-1/2 " />
                    <label className="label">
                        <span className="label-text font-bold">Details</span>
                    </label>
                    <textarea type="text" name='textarea' {...register("textarea", { required: true })}  className="textarea textarea-bordered h-24 w-1/2 " />

                    <label className="label">
                        <span className="label-text font-bold">Class Image</span>
                    </label>
                    <input type="photoURL" name='photoURL' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-1/2" />
                </div>
                <input className="btn btn-info w-1/2 mt-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddClasses;