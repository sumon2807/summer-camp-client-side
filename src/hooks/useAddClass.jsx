import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useAddClass = () => {
  const { user, loading} = useAuth();
  // const token=localStorage.getItem('access-token');

  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: booking = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure(`/bookings?email=${user?.email}`)
        return res.data;
      }
    },
  })
  return [booking, refetch]
}
export default useAddClass;