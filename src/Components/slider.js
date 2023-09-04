import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


export default function Slider() {
  return (
    <>
      <style>
        {`
    
      
      
      
    .swiper {
        margin: 100px auto;
        width: 100%;
        height: 599px;
        border-radius: 20px;
      }
      
      .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
      }
      
      .swiper-slide:nth-child(1n) {
        background-color: rgb(206, 17, 17);
      }
      
      .swiper-slide:nth-child(2n) {
        background-color: rgb(0, 140, 255);
      }
      
      .swiper-slide:nth-child(3n) {
        background-color: rgb(10, 184, 111);
      }
      
      .swiper-slide:nth-child(4n) {
        background-color: rgb(211, 122, 7);
      }
      
      .swiper-slide:nth-child(5n) {
        background-color: rgb(118, 163, 12);
      }
      
      .swiper-slide:nth-child(6n) {
        background-color: rgb(180, 10, 47);
      }
      
      .swiper-slide:nth-child(7n) {
        background-color: rgb(35, 99, 19);
      }
      
      .swiper-slide:nth-child(8n) {
        background-color: rgb(0, 68, 255);
      }
      
      .swiper-slide:nth-child(9n) {
        background-color: rgb(218, 12, 218);
      }
      
      .swiper-slide:nth-child(10n) {
        background-color: rgb(54, 94, 77);
      }
      
    `}

      </style>




      <Swiper
        grabCursor={true}
        effect={'creative'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        modules={[EffectCreative,Autoplay, Pagination, Navigation]}
        className="mySwiper5"

      >
        

        <SwiperSlide 
        style={{
          'background-image':
            'url(https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/images%2Fimg2.jpg?alt=media&token=d49329cf-c48a-46b3-b52d-88971b751f57)',
            backgroundSize: 'cover',
        }}
        >
       </SwiperSlide>

       <SwiperSlide
        style={{
          'background-image':
            'url(https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/images%2Fimg1.jpg?alt=media&token=e57315fb-e95b-49f3-a64c-740d8e7c32fe)',
            backgroundSize: 'cover',
        }}
        >
        </SwiperSlide>
        <SwiperSlide
        style={{
          'background-image':
            'url(https://firebasestorage.googleapis.com/v0/b/geno-41aa5.appspot.com/o/images%2Fimg3.jpg?alt=media&token=8550cfc7-7bb9-44c9-86c2-48e2e4b0cff6)',
            backgroundSize: 'cover',
        }}
        >
        </SwiperSlide>


      </Swiper>

    </>
  );
}
