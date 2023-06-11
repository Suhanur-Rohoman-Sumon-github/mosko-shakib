import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login-and-sinups/login/Login";
import Sinup from "../pages/login-and-sinups/sinup/Sinup";
import Instractors from "../pages/instractors/Instractors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../layout/Dashboard";
import SelectedClass from "../pages/dashbord/selected-class/SelectedClass";
import Payment from "../pages/dashbord/payment/Payment";
import Error from "../pages/error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement:<Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sinup',
                element: <Sinup />
            },
            {
                path: '/instractor',
                element: <Instractors />
            },
            {
                path: '/classes',
                element: <Classes />
            },

        ]
    },
    {
        path: '/dashbord',
        element: <Dashboard />,
        children:[
            {
                path:'/dashbord/selected-class',
                element:<SelectedClass />
            },
            {
                path:'/dashbord/payment',
                element:<Payment />
            }
        ]
    }

])
export default router