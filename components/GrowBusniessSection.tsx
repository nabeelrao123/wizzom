'use client';

import React from 'react';
import Image from 'next/image';
// import image2 from '../../assets/svg/image (2).png'
import vector10 from '../assets/Vector (10).png'
import image2 from '../assets/image (2).png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import modernequipped from '../assets/modern-equipped-computer-lab.png'
import shotman from '../assets/medium-shot-man-designing-websites.png';


const GrowBusinessSection = () => {
    const color = useSelector((state: RootState) => state.color.color);
    return (
        <div className="w-full mt-24">
            <div className="max-w-[1400px]  rounded-3xl bg-[#218Af0]  w-[90%] mx-auto ">
                <div className="block md:flex  px-12 py-16 gap-x-7 ">
                    <div className='w-full md:w-[50%] ' >
                        <h2 className={`font-[Rethink_Sans] ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-[#ffffff]'} font-semibold text-[50px] md:text-5xl
                     leading-[100%] tracking-[0]`}>
                            Helping businesses grow through cutting-edge technology, creative design, and impactful marketing strategies.
                        </h2>
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col text-center px-10 gap-y-2 ' >
                        <p className={`font-inter font-bold  text-8xl  ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} 
                      `}>
                            500+
                        </p>
                        <p className={`font-inter font-semibold  ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} font-normal tracking-[0]`}>
                            Project Completed
                        </p>
                        <p className={`font-inter   ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} font-normal tracking-[0]`}>
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock
                        </p>
                        <div className='flex items-center justify-center mt-4' >
                            <button
                                type="button"
                                className="flex rounded-full justify-center py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition"
                            >
                                Get Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowBusinessSection;