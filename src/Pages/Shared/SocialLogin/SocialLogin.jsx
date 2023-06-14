import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/Fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {user, googleSignIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            const sevedUser={name:loggedUser.name, email:loggedUser.email};
            fetch('http://localhost:5000/users', {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(sevedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    navigate(from, {replace:true})
                }
            })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;