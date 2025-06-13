'use client';
import Image from 'next/image';
import vector10 from '../assets/Vector (10).png'
import seachrafick from '../assets/Web search-rafiki (1) 1 (1).png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import img8 from '../assets/image (8).png'
import shotman from '../assets/medium-shot-man-designing-websites.png'
import grop5026 from '../assets/Frame 1413375026 (1).png'
import arrow from '../assets/arrow.png'
const services = [
    {
        title: "This will be the title",
        description: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes.",
        icon: img8
    },
    {
        title: "This will be the title",
        description: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes.",
        icon: img8
    },
    {
        title: "This will be the title",
        description: "Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes.",
        icon: img8
    },
];

const LatestBlog = () => {

    const color = useSelector((state: RootState) => state.color.color);


    return (
        <div className="w-full mt-24">
            <div className="max-w-[1400px] w-[90%] mx-auto">
                <div className='w-full md:w-[50%] mx-auto ' >
                    <h2 className={`font-rethink text-center font-semibold text-4xl md:text-4xl leading-[100%] mb-4 ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
                        Read Our Latest News & Blog Get Every Updates
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {services.map((service: any, index) => (
                        <div key={index}>
                            <div className='mb-2' >
                                <div className="w-full h-40 relative ">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        className="object-fill"
                                    />
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
                 {/* <div className='flex items-center justify-center mt-10' >
                        
                        <button
                            type="button"
                            className="flex rounded-full justify-center py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition"
                        >
                            See More
                        <Image
                        src={arrow}
                        alt=''
                        width={10}
                        height={10}
                        className='object-cover '
                        />
                        </button>
                        
                    </div> */}
                    <div className='flex items-center justify-center mt-10'>
    <button
        type="button"
        className="flex items-center justify-center rounded-full py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition gap-2"
    >
        See More
        <Image
            src={arrow}
            alt=''
            width={25}
            height={25}
            className='object-cover font-bold '
        />
    </button>
</div>
            </div>
        </div>
    );
};

export default LatestBlog;