import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const FilterContext = createContext();

// Proveedor del contexto
export const FilterProvider = ({ children }) => {
  const [genero, setGenero] = useState(null);
  const [edad, setEdad] = useState(null);
  const [conducta, setConducta] = useState(null);

  const updateGenero = (nuevoGenero) => setGenero(nuevoGenero);
  const updateEdad = (nuevaEdad) => setEdad(nuevaEdad);
  const updateConducta = (nuevaConducta) => setConducta(nuevaConducta);

  return (
    <FilterContext.Provider value={{ genero, updateGenero, edad, updateEdad, conducta, updateConducta }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
