import React from 'react';
import './Card.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
function Card() {
  return (
    <div className="card">
      <div className="card__left">
        <h1>WHY CHOOSE US?</h1>
        <div className="card__left__items">
          <div className="card__left__item">
            <h2>LOREM IPSUM DOLORCONSEC TEER.</h2>
            <div className="card__left__item__text">
              <ArrowRightIcon />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, nostrum!
              </p>
            </div>
          </div>
          <div className="card__left__item">
            <h2>ADIPISCING. PRSENT VESTIBULUM M.</h2>
            <div className="card__left__item__text">
              <ArrowRightIcon />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, nostrum!
              </p>
            </div>
          </div>
          <div className="card__left__item">
            <h2>LOREM IPSUM DOLORCONSEC TEER.</h2>
            <div className="card__left__item__text">
              <ArrowRightIcon />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, nostrum!
              </p>
            </div>
          </div>
          <div className="card__left__item">
            <h2>LOREM IPSUM DOLORCONSEC TEER.</h2>
            <div className="card__left__item__text">
              <ArrowRightIcon />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, nostrum!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card__right">
        <h1>UPCOMING PARTIES</h1>
        <div className="card__right__under">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            adipisci fugiat dolore quam, est ratione.
          </p>
          <div className="card__right__items">
            <div className="card__right__item">
              <img
                src="https://cdn.fuse.bar/fusecdn/articles/2017/11/1000115_coverPhoto1_1510626791412.jpg"
                alt="bar-1"
              />
              <div className="card__right__item__text">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, minima!
                </p>
              </div>
            </div>
            <div className="card__right__item">
              <img
                src="https://znews-photo.zadn.vn/w660/Uploaded/sgogtn/2020_07_07/95614648_851506002028042_4383650244584275968_o_1_.jpg"
                alt="bar-1"
              />
              <div className="card__right__item__text">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, minima!
                </p>
              </div>
            </div>
            <div className="card__right__item">
              <img
                src="https://www.vietnam-evisa.com/wp-content/uploads/2018/05/cocktail-bar.jpg"
                alt="bar-1"
              />
              <div className="card__right__item__text">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, minima!
                </p>
              </div>
            </div>
            <div className="card__right__item">
              <img
                src="https://sanhruou.com/media/Uploaded/Whisky/Monkey-shoulder-sanhruou.jpg"
                alt="bar-1"
              />
              <div className="card__right__item__text">
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, minima!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
