import { useSelector } from "react-redux";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./LatestProduct.scss";
import HomeProductItem from "../HomeProductItem";

SwiperCore.use([Navigation, Pagination]);

function ListProductType({ type }) {
  const products = useSelector((state) => state.products.list);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  console.log(products);
  return (
    <div className="latest-product-container">
      <Swiper
        className="swiper-container"
        spaceBetween={0}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 2,
          },
          480: {
            width: 480,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          1440: {
            width: 1440,
            slidesPerView: 4,
          },
        }}
        navnavigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {products.map((item) => {
          if (item.type === type) {
            return (
              <SwiperSlide key={item._id}>
                <HomeProductItem
                  imageUrl={item.img}
                  name={item.name}
                  oldPrice={item.costOld}
                  newPrice={item.costNew}
                  brand={item.brand}
                  slug={item.slug}
                />
              </SwiperSlide>
            );
          }
        })}
        <div className="swiper-btn-prev" ref={navigationPrevRef}>
          {"<"}
        </div>
        <div className="swiper-btn-next" ref={navigationNextRef}>
          {" "}
          {">"}
        </div>
      </Swiper>
    </div>
  );
}

export default ListProductType;
