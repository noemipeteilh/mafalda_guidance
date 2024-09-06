import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Parameters from "../pages/Parameters";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
    {
        path: "/",
        element: <Home />, 
    },
    {
        path: "/parameters", 
        element: <Parameters />,
},
    ],
},
]);
