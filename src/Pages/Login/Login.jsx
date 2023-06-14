import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] =useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error=>console.log(error.message))
    };




    return (
        <>
            <Helmet>
                <title>Yoku | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:my-20 w-full">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' {...register("password", { 
                                    required: true, maxLength: 20 })} placeholder="password" className="input input-bordered " />
                                <label className="label">
                                    <button onClick={handleTogglePassword} className=' absolute right-4 bottom-12'>
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-info" type="submit" value="Login" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <Link to="/register" className="label-text-alt link link-hover">New to Yoga? Please Register</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;