import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPages from "../pages/ErrorPage/ErrorPage";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../LoginLayout/Login/Login/Login";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/recipe',
                element:<Recipe></Recipe>
            },
            {
                path:'login',
                element:<Login></Login>
            }
            
            
        ]
    }
])

export default router;