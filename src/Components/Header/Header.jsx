import React from 'react';
import './Header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top__icon">
          <FacebookIcon />
        </div>
        <div className="header__top__icon">
          <InstagramIcon />
        </div>
        <div className="header__top__icon">
          <TwitterIcon />
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__logo">
          <h1>BOOM</h1>
          <span>M3</span>
          <p>NIGHT CLUB</p>
        </div>
        <div className="header__bottom__search">
          <div className="input">
            <input type="text" />
          </div>
          <div className="icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="header__nav">
        <nav>
          <ul>
            <li>
              <a className="active" href="#">
                MAIN PAGE
              </a>
            </li>
            <li>
              <a href="#">ABOUT OUR CLUB</a>
            </li>
            <li>
              <a href="#">OUR GALLERY</a>
            </li>
            <li>
              <a href="#">RESIDENTS</a>
            </li>
            <li>
              <a href="#">LATEST NEW & EVENT</a>
            </li>
            <li>
              <a href="#">OUR CONTACTS</a>
            </li>
          </ul>
          <select name="" id="">
            <option value="" selected disabled hidden>
              Navigate To...
            </option>
            <option>MAIN PAGE</option>
            <option value="">ABOUT OUR CLUB</option>
            <option value="">OUR GALLERY</option>
            <option value="">RESIDENTS</option>
            <option value="">LATEST NEWS & EVENTS</option>
            <option value="">OUR CONTACT</option>
          </select>
        </nav>
      </div>
    </header>
  );
}

export default Header;
