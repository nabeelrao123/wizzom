'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import image4618 from '../assets/image 4618.png';
import Image from 'next/image';

type Card = {
  id: number;
  title: string;
  color: string;
};

const cards: Card[] = [
  { id: 1, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.' },
  { id: 2, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.' },
  { id: 3, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.'},
  { id: 4, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.'},
  { id: 5, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.'},
  { id: 6, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla.'},
  { id: 7, title: 'This will be project', color: 'Lorem ipsum dolor sit amet consectetur...' }
];

const CarouselSection: React.FC = () => {
  return (
    <div className="w-full py-10 px-4"> {/* Add padding for partial slides */}
      <Swiper
        modules={[Navigation]}
        // spaceBetween={20} // Gap between slides
        slidesPerView={3.6} // 2 full + partial
        centeredSlides={true}
        navigation
        loop={true}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="min-w-[350px] max-w-[350px] h-[430px] bg-[#2A2F45] rounded-[30px] p-4 text-white shadow-md">
              <Image alt='' src={image4618} className="w-full h-[250px] object-contain" />
              <h3 className="font-bold mt-3">{card.title}</h3>
              <p className="text-sm mt-3 text-[#D4D4D4]">
                {card.color}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
