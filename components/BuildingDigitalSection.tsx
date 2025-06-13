'use client';

import React from 'react';
import Image from 'next/image';
// import image2 from '../../assets/svg/image (2).png'
// import vector from '../../assets/svg/Vector (10).png'
import image2 from '../assets/image (2).png'
import vector from '../assets/Vector (10).png'
// import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import img5024 from '../assets/Group 1413375024.png'

const BuildingDigitalSection = () => {

  const color = useSelector((state: RootState) => state.color.color);


  return (
    <div className="w-full mt-[30px]">
      <div className="max-w-[1400px] w-[90%] mx-auto">
        <div className="block md:flex gap-x-7 ">
          <div className='w-[80%]' >
            <p className={`font-[Rethink_Sans]
            ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} font-semibold text-[40px] 
            md:text-[110px] 
            leading-[100%] tracking-[0]`}>
              Building Digital Experiences That Drive Growth.
            </p>
            <p className={`font-inter mt-4 ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} font-normal
             text-sm leading-[180%] tracking-[0]`}>
              * Your one-stop digital agency for development, marketing, and cloud solutions.
            </p>
          </div>

          <div className='w-[20%] flex  justify-end ' >
            <div className="h-[200px] w-[200px] relative  overflow-hidden">
              <Image
                src={img5024}
                alt="Development and Design illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDigitalSection;