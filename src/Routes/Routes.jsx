import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from "../Pages/Home/Home";
import AllItems from '../Pages/AllItems/AllItems';
import MyItems from "../Pages/MyItems/MyItems";
import AddItems from "../Pages/AddItems/AddItems";
import Login from '../Pages/Login/Login';
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from '../Routes/PrivateRoute';
import CraftDetails from "../Components/CraftDetails/CraftDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: "/all-items",
                element: <AllItems></AllItems>
            },
            {
                path: "/add-items",
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: "/update-items",
                element: <PrivateRoute><AddItems update={true}></AddItems></PrivateRoute>
            },
            {
                path: "/my-items",
                element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/craft-details/:id",
                element: <CraftDetails></CraftDetails>,
                loader: () => fetch('http://localhost:5000/crafts')
            }

        ]
    },
]);

export default router;