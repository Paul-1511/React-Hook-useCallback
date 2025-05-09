import React, { memo } from 'react';

const NormalButton = memo(({ onClick }) => {
  console.log('Renderizando NormalButton');
  return (
    <button className="btn normal" onClick={onClick}>
      Incrementar (Normal)
    </button>
  );
});

export default NormalButton;