import React from 'react';
import './style.scss';

function Button ({
  children,
  style = {},
  onClick = () => {}
}) {
  return (
    <button 
      className="button" 
      style={style}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button;
