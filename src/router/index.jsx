import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Parameters from "../pages/Parameters";
import Filter from "../pages/Filter";
import Conducts from "../pages/Conducts";
import Orientation from "../pages/Orientation";




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
    {
        path: "/filter",
        element: <Filter />,

    },
    {
        path: "/conducts",
        element: <Conducts />,
    },
    {
        path: "/orientation",
        element: <Orientation />,
    }
    ],
},
]);
