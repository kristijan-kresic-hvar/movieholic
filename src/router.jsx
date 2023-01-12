import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/tv/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

export default router;
