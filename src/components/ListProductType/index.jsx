import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "reactstrap";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeProductItem from "../HomeProductItem";
import "./LatestProduct.scss";

SwiperCore.use([Navigation, Pagination]);

function ListProductType({ type }) {
  const products = useSelector((state) => state.products.list);
  const statusProduct = useSelector((state) => state.products.status);
  console.log(statusProduct);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
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
        onSlideChange={() => console.log("slide change")}
      >
        {statusProduct === "loading" ? (
          <div className="loading">
            <Spinner
              style={{
                color: "#533723",
                fontSize: "2rem",
                width: "3rem",
                height: "3rem",
              }}
            />
          </div>
        ) : null}
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
          } else {
            return null;
          }
        })}
        <div className="swiper-btn-prev" ref={navigationPrevRef}>
          {"<"}
        </div>
        <div className="swiper-btn-next" ref={navigationNextRef}>
          {">"}
        </div>
      </Swiper>
    </div>
  );
}

export default ListProductType;
