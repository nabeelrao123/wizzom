'use client';

import React from 'react';
import Image from 'next/image';
// import image2 from '../../assets/svg/image (2).png'
// import vector from '../../assets/svg/Vector (10).png'
import image2 from '../assets/image (2).png'
import vector from '../assets/Vector (10).png'
// import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import {  RootState } from '@/app/redux/store';


const HeroSection = () => {

  const color = useSelector((state: RootState) => state.color.color);


  return (
    <div className="w-full mt-[30px]">
      <div className="max-w-[1400px] w-[90%] mx-auto">
        {/* Header Section */}
        <div className="block md:flex gap-x-10">
          <div className="w-full md:w-[45%]">
            <p className="font-[Rethink_Sans]  text-[18px] leading-[100%] tracking-[0px] capitalize text-[#248AF0]">
              Creation
            </p>
            <h2 className={`font-[Rethink_Sans] ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#ffffff]'} font-semibold text-[40px] md:text-[60px] 
            leading-[100%] tracking-[0]`}>
              Development & Design
            </h2>
          </div>

          <div className="w-full md:w-[55%]">
            <p className={`font-inter  ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} font-normal text-sm leading-[180%] tracking-[0]`}>
              We are a dynamic digital agency committed to turning your ideas into reality. With expertise in
              development, design, digital marketing, and cloud hosting services, we empower businesses to
              thrive in a fast-paced digital world.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="block md:flex gap-x-3 mt-10">
          {/* Left Card */}
          <div className="w-full md:w-[45%] mb-6 md:mb-0">
            <div className={`h-[340px] ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} rounded-[20px] px-12 py-5 flex flex-col justify-between`}
              style={{
                background: 'linear-gradient(180deg, rgba(33, 129, 240, 0.1) 0%, rgba(226, 239, 253, 0.1) 100%)'
              }}>
              <p className="font-[Rethink Sans] font-semibold text-[40px] leading-[1] tracking-[0]">
                From stunning designs to powerful development—your one-stop solution for websites, applications, branding, and more.
              </p>

              <div className="flex justify-end mb-16 ">
                <div className="w-[50px] h-[50px] bg-[#ff3310] rounded-full flex justify-center items-center">
                  <Image
                    src={vector}
                    alt="Arrow icon"
                    width={20}
                    height={20}
                    className="text-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[55%]">
            <div className="h-[340px] w-full relative rounded-[20px] overflow-hidden">
              <Image
                src={image2}
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

export default HeroSection;