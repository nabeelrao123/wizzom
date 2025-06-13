'use client';

import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import {  RootState } from '@/app/redux/store';
import modernequipped from '../assets/modern-equipped-computer-lab.png'
import img1491 from '../assets/Frame 427321491.png'


const EmpoweringSection = () => {

    const color = useSelector((state: RootState) => state.color.color);


    return (
        <div className="w-full mt-24">
            <div className="max-w-[1400px]  rounded-3xl px-10 py-10 w-[90%] mx-auto bg-[#272937]">
                {/* Header Section */}
                <div className="block md:flex">
                    <div className="w-[100%] md:w-[55%]  ">
                        <h2 className={`font-[Rethink_Sans] ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-[#ffffff]'} font-semibold text-4xl md:text-5xl
            leading-[100%] tracking-[0]`}>
                            Empowering Your Vision with Digital Excellence
                        </h2>
                    </div>

                    <div className="w-full md:w-[45%]">
                        <p className={`font-inter  ${color == '#ffffff' ? 'text-[#D4D4D4]' : 'text-[#D4D4D4]'} font-normal text-sm leading-[180%] tracking-[0]`}>
                            We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world. Our team combines innovation, strategy, and technology to deliver tailored solutions that drive results and foster growth.
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="block md:flex gap-x-3 mt-10">
                    {/* Left Card */}
                    <div className="w-full md:w-[45%] mb-6 md:mb-0">
                        <div className={`h-[340px] bg-[#218AF0] ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-[#ffffff]'}
                         rounded-[20px] px-12 py-5 flex flex-col justify-between`}>
                            <div>
                                <h2 className="font-[Rethink Sans] text-[60px] font-bold leading-[1] tracking-[0]">
                                    920+
                                </h2>
                                <p className={`font-inter mt-3  
                                    ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-[#ffffff]'} 
                                 text-lg  leading-[180%] tracking-[0]`}>
                                    Projects finish
                                </p>
                            </div>
                            <div >
                                {/* <h1>dfdsfdsf</h1> */}
                                <Image
                                    src={img1491}
                                    alt="Development and Design illustration"
                                    // width={40}
                                    // height={40}
                                    // fill
                                    className="object-cover"
                                // sizes="(max-width: 768px) 100vw, 55vw"
                                />

                                {/* logo image */}
                            </div>


                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-[55%]">
                        <div className="h-[340px] w-full relative rounded-[20px] overflow-hidden">
                            <Image
                                src={modernequipped}
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

export default EmpoweringSection;