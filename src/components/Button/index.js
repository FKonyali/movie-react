import React from 'react';
import './style.scss';

function Button ({
  children,
  style = {},
  onClick = () => {},
  disabled
}) {
  return (
    <button 
      className="button" 
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  )
}

export default Button;
