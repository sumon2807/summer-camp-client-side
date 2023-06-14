import React, { useContext } from 'react';
import logo from '../../../../public/assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAddClass from '../../../hooks/useAddClass';
import { BiBookmarkAltPlus } from 'react-icons/Bi';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [booking] = useAddClass();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Instructors</summary>
                <ul className="p-2">
                    <li><Link to="/allInstructor">All Instructor</Link></li>
                    <li><a>Top Instructor</a></li>
                </ul>
            </details>
        </li>

        {user ? <>
            <li><Link to="/dashboard">
                <button className='btn btn-sm btn-info gap-2'><BiBookmarkAltPlus className='w-4 h-4'></BiBookmarkAltPlus>
                    <div className='badge badge-primary'>+{booking?.length || 0}</div>
                </button>
            </Link></li>
        </> : <>
            <li><Link to="/contactus">Contact Us</Link></li>
        </>}
    </>
    return (
        <>
            <div className="navbar font-bold text-teal-500 fixed  max-w-screen-xl z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <span><img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /></span>
                            <Link onClick={handleLogout} className="btn btn-ghost btn-info">Logout</Link>
                        </> :
                            <>
                                <Link className="btn btn-outline btn-info" to="/login">Login</Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;