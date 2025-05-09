import React, { useState, useCallback } from 'react';
import OptimizedButton from './OptimizedButton';
import NormalButton from './NormalButton';

const Card = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [counter, setCounter] = useState(0);

  // Función memorizada con useCallback
  const createRandom = useCallback(() => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
    console.log('Generando número aleatorio (memorizado)');
  }, []);

  // Función normal (sin useCallback)
  const addCounter = () => {
    setCounter(prev => prev + 1);
    console.log('Incrementando contador (no memorizado)');
  };

  console.log('Renderizando Card');

  return (
    <div className="card">
      <h2>Card Component</h2>
      
      <div className="values">
        <p>Número aleatorio: {randomNumber ?? 'No generado'}</p>
        <p>Contador: {counter}</p>
      </div>
      
      <div className="buttons">
        <OptimizedButton onClick={createRandom} />
        <NormalButton onClick={addCounter} />
      </div>
    </div>
  );
};

export default Card;