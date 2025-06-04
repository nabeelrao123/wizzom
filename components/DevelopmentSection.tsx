'use client';
import Image from 'next/image';
import vector10 from '../assets/Vector (10).png'
import seachrafick from '../assets/Web search-rafiki (1) 1 (1).png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import grop5026 from '../assets/Frame 1413375026 (1).png'
const services = [
    {
        title: "Websites",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
    {
        title: "E-commerce",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
    {
        title: "CMS Development",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
    {
        title: "API Integration",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
    {
        title: "Custom Solutions",
        description: "Lorem ipsum dolor sit amet consectetur. Ultrices convallis quam euismod viverra nisi malesuada venenatis. Vulputate adipiscing aliquet pellentesque vitae. Nulla risus fusce aliquam sed natoque neque.",
        icon: seachrafick
    },
];

const DevelopmentSection = () => {

    const color = useSelector((state: RootState) => state.color.color);


    return (
        <div className="w-full mt-12">
            <div className="max-w-[1400px] w-[90%] mx-auto">
                <Image
                alt=''
                    src={grop5026}
                    // alt={service.title}
                    // fill
                    className="object-contain mb-12 w-full  "
                />
                <h2 className={`font-rethink font-bold text-4xl md:text-5xl leading-[100%] mb-4 text-center ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                    Development
                </h2>
                <p className={`font-inter font-normal text-sm leading-[180%] tracking-[0] text-center ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} max-w-3xl mx-auto`}>
                    We are a dynamic digital agency committed to turning your ideas into reality. With expertise in
                    development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a
                    fast-paced digital world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {services.map((service: any, index) => (
                        <div key={index} className="overflow-hidden">
                            <div className='mb-2 rounded-[32px] ' style={{
                                background: 'linear-gradient(180deg, rgba(123, 185, 246, 0.1) 0%, rgba(29, 30, 41, 0.1) 100%)',
                            }} >
                                <div className="flex justify-center">
                                    <div className="w-40 h-40 relative ">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end pr-16 pb-8 ">
                                    <div className="w-11 h-11 text-primary bg-[#ff3310] rounded-full flex justify-center items-center">
                                        <Image
                                            src={vector10}
                                            alt="Arrow icon"
                                            width={18}
                                            height={18}
                                        />
                                    </div>
                                </div>
                            </div>

                            <h6 className={`font-rethink ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} font-semibold md:text-2xl leading-[100%] tracking-[0]`}>
                                {service.title}
                            </h6>
                            <p className={`font-inter ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} mt-3 font-normal text-sm leading-[180%] tracking-[0]`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DevelopmentSection;