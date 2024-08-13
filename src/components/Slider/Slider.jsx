import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./Slider.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function App({ children }) {
  // Determine whether to enable loop based on the number of slides
  const shouldEnableLoop = React.Children.count(children) > 3;

  return (
    <>
      <Swiper
        dir="rtl"
        spaceBetween={30}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 768px and < 992px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is < 768px
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
}