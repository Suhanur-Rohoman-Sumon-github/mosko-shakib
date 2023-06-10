import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login-and-sinups/login/Login";
import Sinup from "../pages/login-and-sinups/sinup/Sinup";

const router = createBrowserRouter([
{
    path:'/',
    element:<Main />,
    children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/sinup',
            element:<Sinup />
        }
    ]
}
])
export default router