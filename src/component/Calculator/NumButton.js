import React from 'react';

function NumButton({ onClick, children }) {
  return (
    <button onClick={onClick}>{children}</button>
  );
}

export default NumButton;
