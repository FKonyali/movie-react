import React from 'react';
import './style.scss';

function Button ({
  children
}) {
  return (
    <button className="button">
      { children }
    </button>
  )
}

export default Button;
