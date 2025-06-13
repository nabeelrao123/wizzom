// 'use client';

// import React from 'react';
// import Image from 'next/image';
// // import image2 from '../../assets/svg/image (2).png'
// import vector10 from '../assets/Vector (10).png'
// import image2 from '../assets/image (2).png'
// import { useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/app/redux/store';
// import modernequipped from '../assets/modern-equipped-computer-lab.png'
// import shotman from '../assets/medium-shot-man-designing-websites.png';


// const GrowBusinessSection = () => {
//     const color = useSelector((state: RootState) => state.color.color);
//     return (
//         <div className="w-full mt-24">
//             <div className="max-w-[1400px]  rounded-3xl bg-[#218Af0]  w-[90%] mx-auto ">
//                 <div className="block md:flex px-12 py-16 gap-x-7 sm:text-center md:text-start  ">
//                     <div className='w-full md:w-[50%] ' >
//                         <h2 className={`font-[Rethink_Sans] ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-[#ffffff]'} font-semibold text-4xl md:text-5xl
//                      leading-[100%] tracking-[0]`}>
//                             Helping businesses grow through cutting-edge technology, creative design, and impactful marketing strategies.
//                         </h2>
//                     </div>
//                     <div className='w-full md:w-[50%] flex flex-col text-center px-10 gap-y-2 ' >
//                         <p className={`font-inter font-bold  text-8xl  ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} 
//                       `}>
//                             500+
//                         </p>
//                         <p className={`font-inter font-semibold  ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} font-normal tracking-[0]`}>
//                             Project Completed
//                         </p>
//                         <p className={`font-inter   ${color == '#ffffff' ? 'text-[#ffffff]' : 'text-white'} font-normal tracking-[0]`}>
//                             Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock
//                         </p>
//                         <div className='flex items-center justify-center mt-4' >
//                             <button
//                                 type="button"
//                                 className="flex rounded-full justify-center py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition"
//                             >
//                                 Get Free Consultation
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GrowBusinessSection;


'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const GrowBusinessSection = () => {
    const color = useSelector((state: RootState) => state.color.color);
    const textColor = color === '#ffffff' ? 'text-[#ffffff]' : 'text-white';

    return (
        <div className="w-full mt-24 px-4 sm:px-0">
            <div className="max-w-[1400px] rounded-3xl bg-[#218Af0] w-[90%] mx-auto overflow-hidden">
                <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 gap-y-8 lg:gap-x-7 text-center lg:text-start">
                    {/* Left Section */}
                    <div className='w-full lg:w-[50%] flex flex-col justify-center'>
                        <h2 className={`font-[Rethink_Sans] ${textColor} font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight`}>
                            Helping businesses grow through cutting-edge technology, creative design, and impactful marketing strategies.
                        </h2>
                    </div>
                    
                    {/* Right Section */}
                    <div className='w-full lg:w-[50%] flex flex-col items-center lg:items-center px-2 sm:px-4 md:px-10 gap-y-2'>
                        <p className={`font-inter font-bold text-6xl sm:text-7xl md:text-8xl ${textColor}`}>
                            500+
                        </p>
                        <p className={`font-inter font-semibold ${textColor} text-lg md:text-xl`}>
                            Project Completed
                        </p>
                        <p className={`font-inter ${textColor} text-sm md:text-base max-w-md`}>
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock
                        </p>
                        <div className='flex items-center justify-center mt-4'>
                            <button
                                type="button"
                                className="rounded-full py-2 px-5 sm:py-3 sm:px-6 shadow-sm text-sm sm:text-base font-medium text-white bg-[#ff3310] hover:bg-[#e52e0d] transition-colors duration-200"
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