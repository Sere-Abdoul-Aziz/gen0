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
            'url(https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365774376_238836609112057_1807005516239864233_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi9wRyRn4mKvyA1nYWXpdSoEwn-y-n2SWgTCf7L6fZJcbTWbBTQnkwZhsZWdvleug_6Kubv4-mxPmZqUorPRDw&_nc_ohc=LpdAIc-tfpgAX_1_QNr&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfBVSC8aAhzHeKW4Cx3lqCsWpZp8v50pBGW5KV-w_xmf0w&oe=64E8F848)',
            backgroundSize: 'cover',
        }}
        >
       </SwiperSlide>

       <SwiperSlide
        style={{
          'background-image':
            'url(https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/365776557_238844759111242_528672792154084087_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEHOstum0xE550qSnbyM2S-glSAZ2JFch6CVIBnYkVyHkvbAcXbNSIO4w8unaAQFWAf-WLd86ZKrO0sKLkc7ZJm&_nc_ohc=015x-YqxyZ8AX9Pg85_&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfA6IVT9Xrxzg74LzQaLefh7oEMzF9w55SFZOQX0s9_x6A&oe=64E88F5A)',
            backgroundSize: 'cover',
        }}
        >
        </SwiperSlide>
        <SwiperSlide
        style={{
          'background-image':
            'url(https://scontent.foua1-1.fna.fbcdn.net/v/t39.30808-6/363979827_238828579112860_3648883382059748956_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG1qdsPlz86ROTC1biR-j2x_UczD4QeLF_9RzMPhB4sX21lABeDORy5sLp2luqZFw6wiJxAASC-23ONKx8YbVqo&_nc_ohc=Yz0T7Qvq2hoAX_vyuNs&_nc_zt=23&_nc_ht=scontent.foua1-1.fna&oh=00_AfA-3b1b-4NYHVo6kBn6Co71-JK-eBSpvFITaNs1m-hzRw&oe=64E8A179)',
            backgroundSize: 'cover',
        }}
        >
        </SwiperSlide>


      </Swiper>

    </>
  );
}
