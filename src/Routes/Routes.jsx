import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Classes from "../Pages/Classes/Classes";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import InstructorDetails from "../Pages/InstructorDetails/InstructorDetails";
import DashBoard from "../Layout/DashBoard";
import ManageUser from "../Pages/DashBoard/ManageUser/ManageUser";
import MyBookings from "../Pages/DashBoard/MyBookings/MyBookings";
import AddClasses from "../Pages/AddClasses/AddClasses";
import Payment from "../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminRoutes from "./AdminRoutes";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'allInstructor',
          element: <AllInstructor></AllInstructor>,
          loader: ()=>fetch('https://b7a12-summer-camp-server-side-woad.vercel.app/instructors')
        },
        {
          path: '/instructorInfo/:id',
          element: <InstructorDetails></InstructorDetails>,
          loader: ({params})=>fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/instructors/${params.id}`)
        },
        {
          path: '/classDetails/:id',
          element: <ClassDetails></ClassDetails>,
          loader: ({params})=>fetch(`https://b7a12-summer-camp-server-side-woad.vercel.app/classes/${params.id}`)
        },
        {
          path: 'contactus',
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'myBookings',
          element: <MyBookings></MyBookings>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'manageUser',
          element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path: 'addClasses',
          element: <AddClasses></AddClasses>
        }
      ]
    }
  ]);