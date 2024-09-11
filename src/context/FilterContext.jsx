import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
// Crear el contexto
const FilterContext = createContext();

// Proveedor del contexto
export const FilterProvider = ({ children }) => {
  const [genero, setGenero] = useState(null);
  const [edad, setEdad] = useState(null);
  const [conducta, setConducta] = useState(null);
  const [advices, setAdvices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateGenero = (nuevoGenero) => setGenero(nuevoGenero);
  const updateEdad = (nuevaEdad) => setEdad(nuevaEdad);
  const updateConducta = (nuevaConducta) => setConducta(nuevaConducta);

  const fetchAdvices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/api/advice/');
      setAdvices(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvices();
  }, []);

  return (
    <FilterContext.Provider 
      value={{ 
        genero, updateGenero, 
        edad, updateEdad, 
        conducta, updateConducta,
        advices, loading, error 
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);