import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import Services from "./Pages/Services";
import MyProfile from "./Pages/MyProfile";
import UpdateProfile from "./Pages/UpdateProfile";
import ForgotPassword from "./Pages/ForgotPassword";
import ServiceDetails from "./Pages/ServiceDetails";
import PrivateRoute from "./Components/PrivateRoute";


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
                path: "/forgot-password",
                Component: ForgotPassword,
            },
            {
                path: "/services",
                Component: Services,
                loader: () => fetch("/services.json"),
            },
            {
                path: "/service/:serviceId",
                element: (
                    <PrivateRoute>
                        <ServiceDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            }
        ]
    },
    {
        path: "/*",
        Component: ErrorPage,
    }

])




export default router;