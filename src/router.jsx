import { createBrowserRouter } from "react-router-dom"

import Layout from './layout/Layout'
import Home from './pages/Home/Home'
import Error from "./pages/Error/Error"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router