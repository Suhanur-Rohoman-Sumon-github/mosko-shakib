import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login-and-sinups/login/Login";
import Sinup from "../pages/login-and-sinups/sinup/Sinup";
import Instractors from "../pages/instractors/Instractors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/dashbord/userhome/UserHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path:'/dashbord/home',
                element:<UserHome />
            }
        ]
    }

])
export default router