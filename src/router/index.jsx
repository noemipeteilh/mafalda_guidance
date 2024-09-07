import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterProvider } from "../context/FilterContext"; // Asegúrate de que la ruta sea correcta
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Parameters from "../pages/Parameters";
import Filter from "../pages/Filter";
import Conducts from "../pages/Conducts";
import Orientation from "../pages/Orientation";
import Advices from "../pages/Advices";

// Configura las rutas
export const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
    { path: "/", 
        element: <Home />
    },
    {
        path: "/parameters", 
        element: <Parameters /> 
        },
    { 
        path: "/filter", 
        element: <Filter />
    },
    { 
        path: "/conducts", 
        element: <Conducts />
    },
    { 
        path: "/orientation", 
        element: <Orientation />
    },
    { 
        path: "/advices",
        element: <Advices />
        }
    ]
  }
]);

// Renderiza la aplicación envolviendo con FilterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  </React.StrictMode>
);
