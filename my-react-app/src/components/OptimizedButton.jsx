import React, { memo } from 'react';

const OptimizedButton = memo(({ onClick }) => {
  console.log('Renderizando OptimizedButton');
  return (
    <button className="btn optimized" onClick={onClick}>
      Generar Aleatorio (Optimizado)
    </button>
  );
});

export default OptimizedButton;