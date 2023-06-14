import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user, loading}=useAuth();
    console.log(user);
    const [axios]=useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading}=useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async ()=>{
            const res=await axios.get(`http://localhost:5000/users/instructors/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;