import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useRef } from 'react';

const Register = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const password=useRef({});
    password.current = watch("password", "");
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photoURL: data.photoURL, role: 'student' };
                        fetch('https://b7a12-summer-camp-server-side-woad.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error.message))
            })
    };

    return (
        <>
            <Helmet>
                <title>Yoku | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:my-20 w-full">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Register now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", {
                                    required: true,
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    },
                                    pattern: /(?=.*[A-Z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must be one uppercase</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' {...register('confirmPassword', {
                                    required: 'Please confirm your password', 
                                    validate: (value) =>
                                        value === password.current || 'Passwords do not match',
                                })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirmPassword && (
                                    <span className='text-red-500'>{errors.confirmPassword.message}</span>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Sign Up" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <Link to="/login" className="label-text-alt link link-hover">Already have an account? Please Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;