import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./Pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage,
    }

])




export default router;