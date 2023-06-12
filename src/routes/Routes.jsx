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
import ManageClass from "../pages/dashbord/admin/manage-class/ManageClass";
import ManageUser from "../pages/dashbord/admin/manage-user/ManageUser";
import AddAclass from "../pages/dashbord/instractor/add-a-class/AddAclass";
import MyClsees from "../pages/dashbord/instractor/my-classes/MyClsees";
import ErroledClass from "../pages/dashbord/ErroledClass";


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
                path:'/dashbord/errorled-class',
                element:<ErroledClass />
            },
            {
                path:'/dashbord/payment/:id',
                element:<Payment />
            },
            {
                path:'/dashbord/manage-class',
                element:<ManageClass />
            },
            {
                path:'/dashbord/manage-user',
                element:<ManageUser />
            },
            {
                path:'/dashbord/add-class',
                element:<AddAclass />
            },
            {
                path:'/dashbord/my-classes',
                element:<MyClsees />
            }
        ]
    }

])
export default router