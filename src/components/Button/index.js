import React from 'react';
import './style.scss';

function Button ({
  children,
  style = {},
  onClick = () => {},
  disabled,
  className = ''
}) {
  return (
    <button 
      className={"button" + (className ? ' ' + className : '') } 
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      { children }
    </button>
  )
}

export default Button;
