import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPages from "../pages/ErrorPage/ErrorPage";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../LoginLayout/Login/Login/Login";
import Register from "../LoginLayout/Register/Register";
import NewsLayout from "../Layout/NewsLayout";
import RecipesDetails from "../pages/RecipesDetails/RecipesDetails";



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
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
            
            
            
            
        ]
    },
    {
        path:'recipes',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:":id",
                element:<RecipesDetails></RecipesDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/recipes/${params._id}`)
            }
        ]
    }
])

export default router;