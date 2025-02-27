import React from 'react';
import "../styles/Activity.css";
import enent01 from "../../public/images/event/event01.jpg";
import enent02 from "../../public/images/event/event02.jpg";
import enent04 from "../../public/images/event/event04.jpg";
import enent05 from "../../public/images/event/event05.jpg";
import enent06 from "../../public/images/event/event06.jpg";
import enent07 from "../../public/images/event/event07.jpg";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Activity = () => {
  const feedbacks = [
    { name: "Nemo", text: "حبايب قلب ماما اللهم بارك الولاد اتطورو جدا معاكم" },
    { name: "Aliaa aymen", text: "ربنا يجازيكم خير علي مجهودكم مع الاولاد والاهتمام وبالعناية بالاطفال" },
    { name: "hend ashraf", text: "كنت عاوزة اشكركم عشان الاطفال بيروحو يرددو كل حاجة حصلت معاهم واتعلقو بالحضانة جدا" },
    { name: "والدة عبد الرحمن", text: "الفرحة بتكون واضحة علي وش ابني وهوا رايح الحضانة شكرا جدا ليكو" },
  ];
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
          <Swiper
          loop={true}
            modules={[Pagination , Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ dynamicBullets: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="w-full max-w-lg"
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index} className="p-5 bg-gray-100 rounded-lg shadow-md swiperDate">
                <p className="text-lg font-semibold">{feedback.name}</p>
                <p className="text-gray-700">{feedback.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>


        </section>
      </section>
      <section className="col-lg-12 col-sm-12 col-md-12 map">
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90185.89352916193!2d31.3359185287759!3d30.158231502051937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581525c221bf17%3A0xc4318447938278c4!2z2KfYp9mE2KrYsdi52Kkg2KfZhNio2YjZhNin2YLZitip2Iwg2KjZh9iq2YrZhdiMINmC2LPZhSDYq9in2YYg2LTYqNix2Kcg2KfZhNiu2YrZhdip2Iwg2YXYrdin2YHYuNipINin2YTZgtmE2YrZiNio2YrYqSA2MjIzMjA1!5e0!3m2!1sar!2seg!4v1738323252495!5m2!1sar!2seg" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

    </>
  );
};

export default Activity;
