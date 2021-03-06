import headerImg from 'assets/img/header-img.png';
import Button from 'components/Button';
import Image from 'components/Image';
import React from 'react';
import './style.scss';

function Header () {
  return (
    <header className="header" data-testid="test">
      <div className="header__container">
        <h1 className="header__title header--maxwidth">
          Lorem Ipsum <br/>
          Dolor sit amet consectetur..
        </h1>
        <div className="header__desc header--maxwidth">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. 
          </p>
        </div>
        <div className="header__img">
          <Image
            src={headerImg}
          />
        </div>
        <Button>
          RESERVATION
        </Button>
      </div>
    </header>
  )
}

export default Header;
