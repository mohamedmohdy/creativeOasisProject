import React from 'react';
import "../styles/Activity.css";
import enent01 from "../../public/images/event/event01.jpg";
import enent02 from "../../public/images/event/event02.jpg";
import enent04 from "../../public/images/event/event04.jpg";
import enent05 from "../../public/images/event/event05.jpg";
import enent06 from "../../public/images/event/event06.jpg";
import enent07 from "../../public/images/event/event07.jpg";
import enent08 from "../../public/images/event/event08.jpg";
import enent09 from "../../public/images/event/event09.jpg";
import Marquee from "react-fast-marquee";

const Activity = () => {
  return (
    <>
      <section className="col-lg-12 col-sm-12 col-md-12 slider-Activity">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000" // اجعل السلايدر يتحرك تلقائيًا كل 3 ثوانٍ
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="5"
              aria-label="Slide 7"
            ></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={enent01} className="d-block w-100" alt="Event 1" />
            </div>
            <div className="carousel-item">
              <img src={enent02} className="d-block w-100" alt="Event 2" />
            </div>
            <div className="carousel-item">
              <img src={enent04} className="d-block w-100" alt="Event 3" />
            </div>
            <div className="carousel-item">
              <img src={enent05} className="d-block w-100" alt="Event 4" />
            </div>
            <div className="carousel-item">
              <img src={enent06} className="d-block w-100" alt="Event 5" />
            </div>
            <div className="carousel-item">
              <img src={enent07} className="d-block w-100" alt="Event 6" />
            </div>
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <section className="col-lg-12 col-sm-12 col-md-12 marqee">
          <h2> الفيدباك الخاص با اولياء الامور❤️</h2>
    <Marquee gradient={false} speed={100} delay={-10}>
      <h5>حابة اشكر دكتورة هايدي علي الحضانة الجميلة وبجد مكسبنا الحقيقي لبناتي هو حضرتك ومس سارة والناني الجميلة ربنا يبارك فيها</h5>
    </Marquee>
        </section>
      </section>
      

    </>
  );
};

export default Activity;
