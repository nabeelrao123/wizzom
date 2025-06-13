'use client';

import React from 'react';
import Image from 'next/image';
// import image2 from '../../assets/svg/image (2).png'
import vector10 from '../assets/Vector (10).png'
import image2 from '../assets/image (2).png'
// import vector from '../assets/Vector (10).png'
// import { RootState } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import modernequipped from '../assets/modern-equipped-computer-lab.png'
import shotman from '../assets/medium-shot-man-designing-websites.png';


const OurServices = () => {

    const color = useSelector((state: RootState) => state.color.color);


    return (
        <div className="w-full mt-24">
            <div className="max-w-[1400px]  rounded-3xl  w-[90%] mx-auto ">
                <div className="block md:flex  ">
                    <div className="w-full md:w-[40%] pr-14  ">
                        <h2 className={`font-[Rethink_Sans] ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#ffffff]'} font-semibold text-[50px] md:text-5xl
            leading-[100%] tracking-[0]`}>
                            Our Services
                        </h2>

                        <div className='md:pr-14' >
                            <p className={`  font-inter mt-5  ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} font-normal text-sm leading-[180%] tracking-[0]`}>
                                From web development to digital marketing and cloud hosting, we deliver tailored solutions to help your business thrive in the digital world.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-4 mt-5 ' >



                            <div className={`border  
                            font-semibold  ${color=='#ffffff' ? 'bg-[#041C33] text-white ' : 'bg-white text-[#020E1A] '} rounded-full px-3 py-2 
                             border-[#434552] flex items-center justify-between `} >
                                <p >01 </p>
                                <p >Development & Design</p>
                                <div className=" w-8 h-8 sm:w-10 sm:h-10 bg-[#ff3310] rounded-full flex items-center justify-center">
                                    <Image
                                        src={vector10}
                                        alt="Submit icon"
                                        width={10}
                                        height={10}
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                    />
                                </div>

                            </div>


                            <div className={`border font-semibold ${color=='#ffffff' ? 'text-[#000000] ' : 'text-white'} 
                              rounded-full px-3 py-2  border-[#434552] 
                             flex items-center justify-between `} >
                                <p >02 </p>
                                <p >Marketing</p>
                                <div className=" w-8 h-8 sm:w-10 sm:h-10 bg-[#ff3310] rounded-full flex items-center justify-center">
                                    <Image
                                        src={vector10}
                                        alt="Submit icon"
                                        width={10}
                                        height={10}
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                    />
                                </div>

                            </div>


                            <div className={`border font-semibold ${color=='#ffffff' ? 'text-[#000000] ' : 'text-white'} 
                              rounded-full px-3 py-2  border-[#434552] 
                             flex items-center justify-between `} >
                                <p >03 </p>
                                <p >Hoisting & Cloud</p>
                                <div className=" w-8 h-8 sm:w-10 sm:h-10 bg-[#ff3310] rounded-full flex items-center justify-center">
                                    <Image
                                        src={vector10}
                                        alt="Submit icon"
                                        width={10}
                                        height={10}
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                    />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="w-full md:w-[60%] flex gap-x-5 ">
                        <div className="h-full w-full md:w-[70%]  relative rounded-[20px] overflow-hidden">
                            <Image
                                src={shotman}
                                alt="Development and Design illustration"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 55vw"
                            />
                        </div>
                        <div className="h-full w-full md:w-[30%] rounded-2xl px-5 py-5 flex flex-col justify-between  bg-[#041C33]">
                            <div>
                                <div> <p className='text-white font-semibold text-2xl ' >Meet Our Expert</p> </div>
                                <div> <p className='text-[#D4D4D4] text-sm ' >Looking for design experts who can bring your vision to life?</p> </div>
                            </div>

                            <div className=" w-8 h-8 sm:w-10 sm:h-10 bg-[#ff3310] rounded-full flex items-center justify-center">
                                <Image
                                    src={vector10}
                                    alt="Submit icon"
                                    width={10}
                                    height={10}
                                    className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                />
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurServices;