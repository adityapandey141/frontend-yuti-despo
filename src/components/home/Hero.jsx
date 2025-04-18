import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Hero() {
  let [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  // console.log(currentSlide);

  return (
    <>
      <div className="slider-container ">
        <Slider {...settings}>
          <div
            className={`slide h-[70vh] md:h-[100vh] slide1 ${
              currentSlide === 0 ? "" : ""
            } `}
          >
            <div className="overlay"></div>
            <div className="slider-content">
              <p
                className="text-3xl md:text-4xl font-semibold text-yel"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Green Hope
              </p>
              <h1
                className="font-700 md:font-bold text-5xl md:text-8xl text-white  my-5 animate__animated animate__fadeInUp"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Sustainable Choices.
                <br></br>
                Smarter Business.
              </h1>
              <div className="mt-10">
                <a
                  href="tel:+919824253196"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className=" thm-btn "
                >
                  Explore that Choice
                </a>
              </div>
            </div>
          </div>

          <div
            className={`slide h-[70vh] md:h-[100vh] slide2 ${
              currentSlide === 1 ? "" : ""
            }   `}
          >
            <div className="overlay"></div>
            <div className="slider-content">
              <p
                className="text-3xl md:text-4xl font-semibold text-yel"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Green Hope
              </p>
              <h1
                className="font-700 md:font-bold text-5xl md:text-8xl text-white  my-5 animate__animated animate__fadeInUp"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Good for Business. <br></br>Better for the Planet.
                {/* Our Bread <span className="text-yel">&</span> Butter */}
              </h1>
              <div className="mt-10">
                <a
                  href="tel:+919824253196"
                  className="thm-btn  rounded"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
