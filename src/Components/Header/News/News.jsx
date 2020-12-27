import React from 'react';
import './News.css';
function News() {
  return (
    <div className="news">
      <div className="news__left">
        <div className="news__left__top">
          <h1>LATEST NEWS</h1>

          <h5>26.12.2020</h5>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
            magni.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            reiciendis quisquam sapiente quibusdam, est tempore.
          </p>
        </div>
        <div className="news__left__bottom">
          <h5>01.01.2021</h5>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            sequi.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            libero unde, laudantium ex officiis quas.
          </p>
          <button className="">MORE</button>
        </div>
      </div>
      <div className="news__middle">
        <h2>WELCOME</h2>
        <h1>
          We have everything to get festive mood and make your night special!
        </h1>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          praesentium dolor assumenda dolores totam eaque tempore laborum,
          architecto corrupti! Adipisci.
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempore voluptate. Officia dolores impedit sint consequuntur, harum
          dolorum temporibus aliquam. Rerum delectus illo minima at! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Odit, illum
          eligendi? Voluptatem error dolorem eligendi nihil nesciunt vel
          consectetur odio.
        </p>
        <button>MORE</button>
      </div>
      <div className="news__right">
        <h1>POPULAR DJS</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          dolorem.
        </h3>
        <div className="news__right__items">
          <div className="news__right__item">
            <img
              src="https://inhat.vn/ha-noi/wp-content/uploads/2019/08/nine1-min.jpg"
              alt="1"
            />
            <div className="news__right__item__text">
              <h3>TOM MERRELNS</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="news__right__item">
            <img
              src="https://thietkethicong.org/Uploads/images/beerclub/sunland/thiet_ke_bar_club.jpg"
              alt="1"
            />
            <div className="news__right__item__text">
              <h3>TOM MERRELNS</h3>
              <p>lorem5</p>
            </div>
          </div>
          <div className="news__right__item">
            <img
              src="https://kenh14cdn.com/2019/11/13/ezgif-1-4c4033ceb9b2-15736338585371699717243.jpg"
              alt="1"
            />
            <div className="news__right__item__text">
              <h3>TOM MERRELNS</h3>
              <p>lorem5</p>
            </div>
          </div>
        </div>
        <button>MORE</button>
      </div>
    </div>
  );
}

export default News;
