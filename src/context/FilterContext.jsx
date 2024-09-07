import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const FilterContext = createContext();

// Proveedor del contexto
export const FilterProvider = ({ children }) => {
  const [genero, setGenero] = useState('');
  const [edad, setEdad] = useState(null);
  const [conducta, setConducta] = useState('');

  return (
    <FilterContext.Provider value={{ genero, setGenero, edad, setEdad, conducta, setConducta }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useFilter = () => useContext(FilterContext);
