import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import HomeLayout from "./Pages/Layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
    {
        path: "*",
        Component: ErrorPage,
    }

])




export default router;