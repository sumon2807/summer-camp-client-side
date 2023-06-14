import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHouseUser, FaChild, FaWallet, FaHome, FaUserTie, FaUsers, FaThList, FaTasks, FaUserShield, FaListAlt } from 'react-icons/Fa';
import { HiBookmark } from 'react-icons/Hi';
import useAddClass from '../hooks/useAddClass';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const DashBoard = () => {
    const [booking] = useAddClass();

    // TODO: load data from the server isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-700 text-base-content">
                    {
                        isAdmin ? (<>
                            <li><NavLink to="/" className='font-extrabold text-xl text-warning'>Online Yoga</NavLink></li>
                            <li><NavLink to="/dashboard/adminHome"><FaUserShield className='w-6 h-6'></FaUserShield>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addClass"><FaTasks className='w-6 h-6'></FaTasks>Add Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageClass"><FaThList className='w-6 h-6'></FaThList>Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manageUser"><FaUsers className='w-6 h-6'></FaUsers>Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageBookings"><FaListAlt className='w-6 h-6'></FaListAlt>Manage Bookings</NavLink></li>
                        </>) : isInstructor ? (
                            <>
                                <li><NavLink to="/" className='font-extrabold text-xl text-warning'>Online Yoga</NavLink></li>
                                <li><NavLink to="/dashboard/instructorHome"><FaUserShield className="w-6 h-6" />Instructor Home </NavLink></li>
                                <li><NavLink to="/dashboard/addClasses"><FaThList className="w-6 h-6" />Add Classes</NavLink></li>
                                <li><NavLink to="/dashboard/MyClasses"><FaThList className="w-6 h-6" />My Classes</NavLink></li>
                                <li><NavLink to="/dashboard/enroleStudent"><FaThList className="w-6 h-6" />Total Enrolled Student</NavLink></li>
                            </>
                        ) :
                            (<>
                                <li><NavLink to="/" className='font-extrabold text-xl text-warning'>Online Yoga</NavLink></li>
                                <li><NavLink to="/dashboard/userhome"><FaHouseUser className='w-6 h-6'></FaHouseUser>User Home</NavLink></li>
                                <li><NavLink to="/dashboard/myBookings"><HiBookmark className='w-6 h-6'></HiBookmark>My Classes
                                    <span className='badge badge-warning'>+{booking?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"><FaWallet className='w-6 h-6'></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/enrolleclass"><FaChild className='w-6 h-6'></FaChild>My Bookings</NavLink></li>
                            </>
                            )
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome className='w-6 h-6'></FaHome>Home</NavLink></li>
                    <li><NavLink to="/contact Us"><FaUserTie className='w-6 h-6'></FaUserTie>Contact Us</NavLink></li>
                </ul>

            </div>
        </div >
    );
};

export default DashBoard;