import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/router';
import GlobalStyle from './globalStyles';
import { FilterProvider } from './context/FilterContext'; // Importa el contexto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <FilterProvider> {/* Envuelve la aplicación con el FilterProvider */}
      <RouterProvider router={router} />
    </FilterProvider>
  </React.StrictMode>
);
