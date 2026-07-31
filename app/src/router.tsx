import { createBrowserRouter } from "react-router-dom"
import LandingLayout from "./layouts/LandingLayout"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: "signup",
                element: <SignUpPage />
            },
            {
                path: "signin",
                element: <SignInPage />
            }
        ]
    },
    {
        path: "/user",
        element: <AppLayout />,
        children: [
            {
                path: "dashboard",
                children: [

                ]
            }
        ],
    },
    // { path: "*", element: <NotFound /> }, / / catch-all
])