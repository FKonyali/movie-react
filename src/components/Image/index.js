import React, { useState } from 'react';
import './style.scss';

function Image ({
  src,
  alt,
  onClick = () => {},
  skeletonStyle
}) {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true);
  }

  const onError = (e) => {
    setLoaded(true);
    console.log('error', e)
  }

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        onLoad={onLoad} 
        onError={onError} 
        onClick={onClick} 
        style={
          !loaded ? {
            display: 'none'
          } : {

          }
        }
      />
      {
        !loaded && (
          <div className="skeleton" style={skeletonStyle}></div>
        ) 
      }
    </>
  )
}

export default Image;
