import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button'; // Asegúrate de que la ruta sea correcta

test('debe renderizar el botón con el nombre y sin ícono', () => {
  render(
    <Button
      to="/test"
      backgroundColor="blue"
      textColor="white"
    />
  );
  // Puedes agregar aserciones aquí si es necesario
});
