'use client';
import Image from 'next/image';
import { Rethink_Sans } from 'next/font/google';
import vector10 from '../assets/Vector (10).png'
import img3 from '../assets/image (3).png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import img5 from '../assets/image (5).png'
import img6 from '../assets/image (6).png'
import img7 from '../assets/image (7).png'


const rethinkSans = Rethink_Sans({ subsets: ['latin'] });

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
  iconUrl: any;
  // key:number
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'UI/UX design',
    description: 'We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.',
    imageUrl: img3,
    iconUrl: vector10,
  },
  {
    id: 2,
    title: 'Brand creation',
    description: 'We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.',
    imageUrl: img5,
    iconUrl: vector10,
  },
  {
    id: 3,
    title: 'Graphic design',
    description: 'We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.',
    imageUrl: img6,
    iconUrl: vector10,
  },
  {
    id: 4,
    title: 'Printing service',
    description: 'We are a dynamic digital agency committed to turning your ideas into reality. With expertise in development, design, digital marketing, and cloud hosting services, we empower businesses to thrive in a fast-paced digital world.',
    imageUrl: img7,
    iconUrl: vector10,
  },
];

const ServiceCard = ({ service }: { service: ServiceItem }) => {

  const color = useSelector((state: RootState) => state.color.color);
  return (
    <div className='mt-7' >
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 mt-7">
        {/* Title */}
        <div className="w-full md:w-1/4">
          <h3 className={`${rethinkSans.className} ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'}  text-2xl sm:text-3xl md:text-4xl font-semibold`}>
            {service.title}

          </h3>
        </div>

        {/* Description */}
        <div className="w-full md:w-2/4">
          <p className={`font-inter ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} font-normal text-sm leading-relaxed`}>
            {service.description}
          </p>
        </div>

        {/* Image with Icon */}
        <div className="w-full md:w-1/4 flex justify-start md:justify-center items-start md:items-center">
          {/* <div className={`relative  ${service.id%2 !==0 ? '-rotate-[-5deg]' : 'rotate-[-5deg]' `}> */}
          <div className={`relative ${service.id % 2 == 0 ? '-rotate-[10deg]' : 'rotate-[1deg]'}`}>

            <Image
              src={service.imageUrl}
              alt={service.title}
              width={120}
              height={120}
              className="object-cover"
            />
            <div className="absolute top-[-10px] right-[-15px] text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[#ff3310] rounded-full flex justify-center items-center">
              <Image
                src={service.iconUrl}
                alt="icon"
                width={12}
                height={12}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* <div className='border-2 border-red-700' ></div> */}

      </div>
      <div className='border border-[#434552] mb-5 mt-5' ></div>

    </div>

  );
};

const DesignServices = () => {
  const color = useSelector((state: RootState) => state.color.color);
  return (
    <div className="w-full md:mt-10 py-10  "
      style={{ background: 'linear-gradient(180deg, rgba(123,185,246,0.1) 0%, rgba(29,30,41,0.1) 100%' }}
    >
      <div className="max-w-[1400px] w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className={`${rethinkSans.className}  ${color == '#ffffff' ? 'text-[#000000]' : 'text-[#ffffff]'} font-semibold text-4xl`}>
              Design
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className={`font-inter ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} font-normal text-sm leading-[180%] tracking-[0]`}>
              We are a dynamic digital agency committed to turning your ideas into reality. With expertise in
              development, design, digital marketing, and cloud hosting services, we empower businesses to
              thrive in a fast-paced digital world.
            </p>
          </div>
        </div>
        <div className='border border-[#434552]'></div>

        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default DesignServices;