import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const AddClasses = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
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
                        <span className="label-text font-bold">Class Image</span>
                    </label>
                    <input type="file" name='photoURL' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Instructor Name</span>
                    </label>
                    <input type="text" name='instructorName' {...register("instructorName", { required: true })} defaultValue={user.displayName} disabled={true} className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Instructor Email</span>
                    </label>
                    <input type="text" name='instructorEmail' {...register("instructorEmail", { required: true })} defaultValue={user.email} disabled={true} className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Available Seat</span>
                    </label>
                    <input type="text" name='seats' {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <input type="text" name='price' {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-1/2 " />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-info w-1/2" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddClasses;