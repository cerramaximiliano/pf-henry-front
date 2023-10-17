import slide_image_1 from '../../assets/img_1.png';
import slide_image_2 from '../../assets/img_2.png';
import slide_image_3 from '../../assets/img_3.png';
import slide_image_4 from '../../assets/img_4.png';
import slide_image_5 from '../../assets/img_5.png';
import slide_image_6 from '../../assets/img_6.png';
import slide_image_7 from '../../assets/img_7.png';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { Autoplay, Navigation, EffectCoverflow} from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='mt-[200px] mb-[200px]'>
      <Swiper
        className='w-[800px] h-[500px]'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay,Navigation, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}