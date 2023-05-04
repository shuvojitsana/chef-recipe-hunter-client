import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPages from "../pages/ErrorPage/ErrorPage";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../LoginLayout/Login/Login/Login";
import Register from "../LoginLayout/Register/Register";
import NewsLayout from "../Layout/NewsLayout";
import RecipesDetails from "../pages/RecipesDetails/RecipesDetails";
import PrivetRoutes from "./PrivetRoutes";
import Trems from "../pages/trems/Trems";
import Blogs from "../pages/Blogs/Blogs";



const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/recipe',
                element: <Recipe></Recipe>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: 'trems',
                element: <Trems></Trems>
            }




        ]
    },
    {
        path: 'recipes',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivetRoutes><RecipesDetails></RecipesDetails></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://chef-recipe-hunter-server-shuvojitsana.vercel.app/recipes/${params.id}`)
            }
        ]
    }
])

export default router;