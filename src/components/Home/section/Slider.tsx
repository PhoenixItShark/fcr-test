import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Arrow from "../../../../public/Arrow.svg";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import styles from "../../../style/Home/Slider/index.module.scss";
import { useRef } from "react";
import { data } from "../../../lib/data/data";

interface SliderProps {
  setActiveIndex: (index: number) => void;
}

const Slider = ({ setActiveIndex }: SliderProps) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div className={styles.slider_wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView='auto'
        initialSlide={2}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        <div className={styles.arrow_wrapper}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.slide_wrapper}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={`${item.name}-img`}
                />
                <p className={styles.review}>
                  В большинстве случаев именно такой вид доставки оказывается
                  самым выгодным для клиента. В большинстве случаев именно такой
                  вид доставки оказывается самым выгодным для клиента. В
                  большинстве случаев именно такой вид доставки оказывается
                  самым В большинстве случаев именно такой вид доставки
                  оказывается самым выгодным для клиента. В большинстве случаев
                  именно такой вид доставки оказывается самым выгодным для
                  клиента. В большинстве случаев именно такой вид доставки
                  оказывается самым
                </p>
                <span className={styles.name}>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <img
        ref={navigationPrevRef}
        className={styles.custom_prev}
        src={Arrow}
        alt='arrow'
      />
      <img
        ref={navigationNextRef}
        className={styles.custom_next}
        src={Arrow}
        alt='arrow'
      />
    </div>
  );
};

export default Slider;
