import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myappointment',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AddDoctor></AddDoctor>
            },
            {
                path: '/dashboard/managedoctor',
                element: <ManageDoctors></ManageDoctors>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`https://doctors-portal-server-side-eight.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])

export default router;