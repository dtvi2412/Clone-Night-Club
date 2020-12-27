import React from 'react';
import './Carousel.css';

import Slider from 'react-slick';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AlbumIcon from '@material-ui/icons/Album';
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel__image">
          <img
            src="https://ae01.alicdn.com/kf/HTB1mc1tw1OSBuNjy0Fdq6zDnVXa0/wall-decor-custom-print-fabric-poster-music-club-sexy-DJ-girl-02-PYR036-for-room-decor.jpg"
            alt="image-1"
          />
        </div>
        <div className="carousel__image">
          <img
            src="https://www.wallpaperup.com/uploads/wallpapers/2014/09/02/433550/9b351b2a5a17204d9f4214ab055e9de8.jpg"
            alt="image-2"
          />
        </div>
      </Slider>
      <div className="carousel__items">
        <div className="carousel__item">
          <div className="carousell__item__icon">
            <LocalBarIcon className="localBar" />
          </div>
          <div className="carousell__item__text">
            <h1>DRINKS</h1>
            <h3 className="drinks">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              consectetur enim placeat mollitia fuga minima!
            </p>
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousell__item__icon">
            <EventNoteIcon className="events" />
          </div>
          <div className="carousell__item__text">
            <h1>EVENTS</h1>
            <h3 className="events">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              consectetur enim placeat mollitia fuga minima!
            </p>
          </div>
        </div>
        <div className="carousel__item">
          <div className="carousell__item__icon">
            <AlbumIcon className="album" />
          </div>
          <div className="carousell__item__text">
            <h1>MUSIC</h1>
            <h3 className="music">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              consectetur enim placeat mollitia fuga minima!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
