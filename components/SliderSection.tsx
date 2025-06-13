// 'use client';

// import React from 'react';
// import Image from 'next/image';
// // import image2 from '../../assets/svg/image (2).png'
// // import vector from '../../assets/svg/Vector (10).png'
// import image2 from '../assets/image (2).png'
// import vector from '../assets/Vector (10).png'
// // import { RootState } from '@reduxjs/toolkit/query';
// import { useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/app/redux/store';
// import img1 from '../assets/64066fd9627136a5c3ab515a_Dropbox-black.svg.png'
// import img2 from '../assets/64066fd9ab6977ea0d96a99c_OrangeTheory-black.svg.png'
// import img3 from '../assets/64066fd9be555a14f4817591_Mural-black.svg.png'
// import img4 from '../assets/64066fd96ede5e52a5e3ff07_Philips-black.svg.png'
// import img5 from '../assets/64066fdaf7ec2d7c22872c42_Vice-black.svg.png'



// const SliderSection = () => {

//     const color = useSelector((state: RootState) => state.color.color);


//     return (
//         <div className="w-full mt-24">
//             <div className="max-w-[1400px] w-[90%] mx-auto">
//                 <div className="flex items-center justify-center">
//                     <div className="w-full overflow-hidden">
//                         <div
//                             className="whitespace-nowrap inline-block"
//                             style={{
//                                 animation: 'marquee 20s linear infinite'
//                             }}
//                         >
//                             {[
//                                 img1,
//                                 img2,
//                                 img3,
//                                 img4,
//                                 img5,
//                                 img1,
//                                 img2,
//                                 img3,
//                                 img4,
//                                 img5,
//                             ].map((src, index) => (
//                                 <div key={`duplicate-${index}`} className="mx-8 inline-block">
//                                     <Image
//                                         src={src}
//                                         alt={`Logo ${index + 1}`}
//                                         width={120}
//                                         height={80}
//                                         className="object-contain h-10"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(100%); }
//           100% { transform: translateX(-100%); }
//         }
//       `}</style>
//         </div>
//     );
// };

// export default SliderSection;


'use client';

import React from 'react';
import Image from 'next/image';
import img1 from '../assets/64066fd9627136a5c3ab515a_Dropbox-black.svg.png';
import img2 from '../assets/64066fd9ab6977ea0d96a99c_OrangeTheory-black.svg.png';
import img3 from '../assets/64066fd9be555a14f4817591_Mural-black.svg.png';
import img4 from '../assets/64066fd96ede5e52a5e3ff07_Philips-black.svg.png';
import img5 from '../assets/64066fdaf7ec2d7c22872c42_Vice-black.svg.png';

const logos = [img1, img2, img3, img4, img5];

const SliderSection = () => {
//   const color = useSelector((state: RootState) => state.color.color);

  return (
    <div className="w-full mt-24">
      <div
        className={'w-[90%] max-w-[1400px] mx-auto py-4'}
      >
        <div className="relative w-full overflow-hidden">
          {/* Animated Track */}
          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((src, index) => (
              <div key={index} className="mx-6 flex-shrink-0">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Track for seamless loop */}
          {/* <div className="flex animate-marquee2 whitespace-nowrap absolute top-0 left-full">
            {[...logos, ...logos].map((src, index) => (
              <div key={`copy-${index}`} className="mx-6 flex-shrink-0">
                <Image
                  src={src}
                  alt={`Logo Copy ${index + 1}`}
                  width={120}
                  height={80}
                  className="object-contain h-10 w-auto"
                />
              </div>
            ))} */}
          {/* </div> */}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SliderSection;
