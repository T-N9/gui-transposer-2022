import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const SwiperFree = (props) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
    //   freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
};

export default SwiperFree;
