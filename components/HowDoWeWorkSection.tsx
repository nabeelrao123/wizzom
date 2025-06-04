'use client'

import React from 'react';
import Image from 'next/image';
import frame1 from '../assets/Frame (1).png'
import object from '../assets/OBJECTS.png'
import group5029 from '../assets/Group 1321315029.png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';

const HowDoWeWorkSection = () => {
    const color = useSelector((state: RootState) => state.color.color);

    const cardData = [
        {
            id: 1,
            image: frame1,
            title: 'Websites',
            description:
                'We start by understanding your goals, challenges, and vision. Through collaboration and research, we craft a customized strategy tailored to your needs.',
        },
        {
            id: 2,
            image: group5029,
            title: 'Create',
            description:
                'Our team designs and develops cutting-edge solutions, from stunning websites to impactful marketing campaigns, ensuring everything aligns with your brand.',
        },
        {
            id: 3,
            image: object,
            title: 'Launch & Grow',
            description:
                'Once we deliver, we help you launch seamlessly and provide ongoing support to ensure growth and long-term success.',
        },
    ];



    return (
        <div className="w-full mt-[50px]">
            <div className="max-w-[90%] mx-auto px-8 py-8 rounded-3xl "
                style={{ background: 'linear-gradient(180deg, rgba(123,185,246,0.1) 0%, rgba(29,30,41,0.1) 100%' }}
            >
                {/* <h2 className="font-bold text-[50px] leading-[100%] tracking-[0%] font-[Rethink_Sans] text-center text-white">
                    How Do We Work
                </h2> */}

                <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10">
                    {cardData.map((card) => (
                        <div key={card.id}>
                            <div className="rounded-[18px] mt-10 md:mt-0">
                                <div className="flex items-center justify-center">
                                    <Image
                                        src={card.image}
                                        alt={`${card.title} illustration`}
                                        width={150}
                                        height={150}
                                        className="object-fit"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="flex items-center justify-center">
                                    <div className="w-[25px] h-[25px] bg-[#061E36] rounded-full flex justify-center items-center">
                                        <p className="text-white font-bold">{card.id}</p>
                                    </div>
                                </div>
                                <h3
                                    className={`mt-3 font-[Rethink_Sans] ${color === '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'
                                        } font-semibold text-xl leading-[100%] tracking-[0]`}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className={`font-inter ${color === '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'
                                        } mt-3 font-normal text-sm leading-[180%] tracking-[0]`}
                                >
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-end mt-3'  >
                    <button
                        type="button"
                        className="flex rounded-full justify-center py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition"
                    >
                        Get Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowDoWeWorkSection;



