import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import Services from "./Pages/Services";
import MyProfile from "./Pages/MyProfile";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: () => fetch("/services.json"),
            },
            {
                path: "/login",
                Component: LoginPage,
            },
            {
                path: "/signup",
                Component: SignUp,
            },
            {
                path: "/services",
                Component: Services,
                loader: () => fetch("/services.json"),
            },
            {
                path: "/profile",
                Component: MyProfile,
            }
        ]
    },
    {
        path: "/*",
        Component: ErrorPage,
    }

])




export default router;