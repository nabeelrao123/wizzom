'use client'
import React from 'react';
import Image from 'next/image';
import vector15 from '../assets/Vector (15).png'
import globe from '../assets/globe.png'
import group120 from '../assets/Group 1321315120.png'
import group121 from '../assets/Group 1321315121 (1).png'
import group7 from '../assets/Group (7).png'
import group22 from '../assets/Group 1321315122.png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';


const WhyChooseUs = () => {
    const color = useSelector((state: RootState) => state.color.color);

    const featuresLeft = [
        {
            title: 'Transparent Approach',
            description: 'We prioritize open communication, keeping you involved and informed every step of the way.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[-35px]'
        },
        {
            title: 'Quality Assurance',
            description: 'Rigorous testing protocols ensure flawless performance across all devices and platforms.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[5px] lg:translate-y-[-80px]'
        },
        {
            title: 'Innovative Solutions',
            description: 'Cutting-edge technologies tailored to solve your unique business challenges.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[-22px]'
        }
    ];

    const featuresRight = [
        {
            title: 'Timely Delivery',
            description: 'We meet deadlines without compromising quality, every single time.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[33px]'
        },
        {
            title: 'User-Centric Design',
            description: 'Interfaces designed for optimal user experience and conversion rates.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[5px] lg:translate-y-[-80px]'
        },
        {
            title: 'Ongoing Support',
            description: 'Continuous maintenance and updates to keep your solution performing at its best.',
            icon: '/assests/Group 1321315115.png',
            translate: 'lg:-translate-x-[22px]'
        }
    ];

    return (

        <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-[50%] mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white mb-8 md:mb-10 font-rethink-sans leading-tight">
                        Why Choose Us For <span className="block sm:inline">Development & Design?</span>
                    </h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                    {/* <!-- Left Features Column --> */}
                    <div className="flex-1 space-y-6 md:space-y-14 max-w-md lg:max-w-none   ">
                        {/* <!-- Feature 1 --> */}
                        <div className="flex gap-4 items-start  mb-6 lg:mb-8 lg:-translate-x-[-35px]">
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1 text-end font-rethink-sans font-semibold `}>
                                    Transparent Approach</h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm text-end pl-5 font-inter leading-relaxed`}>
                                    We prioritize open communication, keeping you involved and informed every step of the
                                    way.
                                </p>
                            </div>

                            <div className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center">
                                <Image
                                    src={vector15}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className="object-contain"
                                />
                            </div>

                        </div>


                        {/* <!-- Feature 2 --> */}
                        <div className="flex gap-4 items-start md:my-18 mb-11  lg:translate-x-[1px] lg:mt-8 ">
                            <div className="flex-1  ">
                                <h3 className={`text-xl md:text-2xl  ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1 text-end font-rethink-sans font-semibold`}>Quality
                                    Assurance</h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm text-end pl-5 font-inter leading-relaxed`}>
                                    Rigorous testing protocols ensure flawless performance across all devices and platforms.
                                </p>
                            </div>
                            <div
                                className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14  rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center">
                                <Image
                                    src={group22}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className=" object-contain"
                                />
                            </div>
                        </div>

                        {/* <!-- Feature 3 --> */}
                        <div className="flex gap-4 items-start mt-6 lg:mt-8 lg:-translate-x-[-22px]">
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl  ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1 text-end font-rethink-sans font-semibold `}>
                                    Global Reach</h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm  font-inter text-end leading-relaxed`}>
                                    With a global reach and local expertise, we craft digital strategies that resonate with your audience.   </p>
                            </div>
                            <div
                                className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center">
                                <Image
                                    src={globe}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* ///center circle */}
                    <div className="hidden lg:flex items-center justify-center relative my-4 lg:my-0">
                        <div className="w-64 h-64 md:w-[350px] md:h-[350px] border border-[#272937] 
        rounded-full flex justify-center items-center animate-pulse-slow">
                            <div className="w-3/4 h-3/4 border border-[#272937] rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1/2 h-1/2 border-[#272937] rounded-full blur-xl"></div>
                        </div>
                    </div>


                    {/* end center circle */}



                    {/* <!-- Right Features Column --> */}
                    <div className="flex-1  md:space-y-14 max-w-md lg:max-w-none mt-10 md:mt-0 ">
                        {/* <!-- Feature 4 --> */}
                        <div className="flex gap-4 items-start mb-6 lg:mb-8 lg:-translate-x-[33px] ">
                            <div
                                className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center">
                                <Image
                                    src={group7}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className=" object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl  ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1  font-rethink-sans font-semibold `}>Timely Delivery
                                </h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm font-inter leading-relaxed pr-12 `}>
                                    We meet deadlines without compromising quality, every single time.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start md:my-18 lg:-translate-x-[5px] ">
                            <div
                                className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center"
                            >
                                <Image
                                    src={group120}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl md:text-2xl  ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1  font-rethink-sans font-semibold `}>User-Centric
                                    Design</h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm  font-inter leading-relaxed pr-12 `}>
                                    Interfaces designed for optimal user experience and conversion rates.
                                </p>
                            </div>
                        </div>

                        {/* <!-- Feature 6 --> */}
                        <div className="flex gap-4 items-start mt-6 lg:mt-8 lg:-translate-x-[20px]">
                            <div
                                className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[#006DE6] to-[#3D99FF] p-2 flex items-center justify-center">
                                <Image
                                    src={group121}
                                    alt=""
                                    height={24}
                                    width={24}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                {/* text-xl md:text-2xl text-white mb-1 text-end font-rethink-sans */}
                                <h3 className={`text-xl md:text-2xl   ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} mb-1 font-rethink-sans font-semibold `}>Ongoing Support
                                </h3>
                                <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} text-sm font-inter leading-relaxed`}>
                                    Continuous maintenance and updates to keep your solution performing at its best.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;