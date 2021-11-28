import { useHistory } from 'react-router';
import Button from 'components/Button';
import React from 'react';
import './style.scss';

function NotFound () {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <div className="not-found">
      <div className="not-found__title">
        404
      </div>
      <div className="not-found__desc">
        Page not found
      </div>
      <Button 
        onClick={goBack}
        className="not-found__btn"
      >
        Go Back
      </Button>
    </div>
  )
}

export default NotFound;
