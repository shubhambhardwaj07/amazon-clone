import React, { useState, useEffect } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useCtxValue } from './StateProvider';
import { auth } from './firebase';
import { Hidden } from '@material-ui/core';

function Header() {
  const [show, setShow] = useState('false');
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos((prev) => document.body.getBoundingClientRect().top);
      setShow((prev) => document.body.getBoundingClientRect().top > scrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  //console.log(auth);
  const [{ basket, user }, dispatch] = useCtxValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="Amazon_logo.png"
            alt="amazon logo"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">
                {user ? 'Sign out' : 'Sign in'}
              </span>
            </div>
          </Link>
          <div className="header__option visible-lg">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option visible-lg">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className={`subNav ${show ? 'active' : 'hidden'}`}>
        <ul>
          <l1>Developed By Shubh💚</l1>
        </ul>
      </div>
    </>
  );
}

export default Header;
