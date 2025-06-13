// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import logo from '../assets/logo (3).png'
// import Image from 'next/image';
// import vector16 from '../assets/Vector (16).png'
// import { useDispatch, useSelector } from 'react-redux';
// import { changeColor } from '@/app/redux/colorSlice';
// import { AppDispatch, RootState } from '@/app/redux/store';
// import group4373 from '../assets/Group 1321314373.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = ['Home', 'Tribies', 'About Us', 'Contact Us']
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const dispatch = useDispatch<AppDispatch>();
//   const toggleColor = (bgColor: string) => {

//     dispatch(changeColor(bgColor))
//   }

//   const color = useSelector((state: RootState) => state.color.color);
//   return (
//     <nav className="text-white">
//       <div className="max-w-[1400px] w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="flex items-center">
            
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//               aria-controls="mobile-menu"
//               aria-expanded={isOpen}
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
//             <div className="flex space-x-4">
//               {menuItems.map((menus: string,index:number) => (<>
//                 <Link key={index} href="#" className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'} px-3 py-2 rounded-md text-sm `}>{menus}</Link>
//               </>))}
//             </div>
//           </div>
//           <div className="hidden sm:flex sm:items-center">
//             <div className="flex gap-x-3">
//               <button className="w-[25px] h-[25px] bg-[#218AF0] rounded-full flex justify-center items-center"
//                 onClick={() => toggleColor(color == '#020E1A' ? '#ffffff' : '#020E1A')}
//               >

//                 <Image
//                   src={color == '#020E1A' ? vector16 : group4373}
//                   alt="Arrow icon"
//                   width={15}
//                   height={15}
//                   className="text-center"
//                 />
//               </button>
//               <div>
//                 <p className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'}`} >EN</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
//         <div className="pt-2 pb-3 space-y-1">
//           {menuItems.map((menus: string,index:number) => (<>
//             <Link key={index} href="#" className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'} px-3 py-2 rounded-md text-sm `}>{menus}</Link>
//           </>))}
//           <div className="mt-4 pl-3">
//             <button className="w-[25px] h-[25px] bg-[#218AF0] rounded-full flex justify-center items-center"
//               onClick={() => toggleColor(color == '#020E1A' ? '#ffffff' : '#020E1A')}
//             >

//               <Image
//                 src={color == '#020E1A' ? vector16 : group4373}
//                 alt="Arrow icon"
//                 width={15}
//                 height={15}
//                 className="text-center"
//               />
//             </button>
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




'use client';

import { useState } from 'react';
import Link from 'next/link';
import logo from '../assets/logo (3).png'
import Image from 'next/image';
import vector16 from '../assets/Vector (16).png'
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '@/app/redux/colorSlice';
import { AppDispatch, RootState } from '@/app/redux/store';
import group4373 from '../assets/Group 1321314373.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [ {title:'Home',link:'/home'},
    {title:'Tribies',link:'/tribies'},
    {title:'About Us',link:'/aboutus'},
    {title:'Contact Us',link:'/contactus'},
    ]
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch<AppDispatch>();
  const toggleColor = (bgColor: string) => {

    dispatch(changeColor(bgColor))
  }

  const color = useSelector((state: RootState) => state.color.color);
  return (
    <nav className="text-white">
      <div className="max-w-[1400px] w-[90%] mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
            
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={40}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
            <div className="flex space-x-4">
              {menuItems.map((menus: {title:string,link:string},index:number) => (<>
                <Link key={index} href={menus.link} className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'} px-3 py-2 rounded-md text-sm `}>{menus.title}</Link>
              </>))}
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="flex gap-x-3">
              <button className="w-[25px] h-[25px] bg-[#218AF0] rounded-full flex justify-center items-center"
                onClick={() => toggleColor(color == '#020E1A' ? '#ffffff' : '#020E1A')}
              >

                <Image
                  src={color == '#020E1A' ? vector16 : group4373}
                  alt="Arrow icon"
                  width={15}
                  height={15}
                  className="text-center"
                />
              </button>
              <div>
                <p className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'}`} >EN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {menuItems.map((menus:{title:string,link:string},index:number) => (<>
            <Link key={index} href={menus.link} className={`${color == '#ffffff' ? 'text-[#262626]' : 'text-[#ffffff]'} px-3 py-2 rounded-md text-sm `}>{menus.title}</Link>
          </>))}
          <div className="mt-4 pl-3">
            <button className="w-[25px] h-[25px] bg-[#218AF0] rounded-full flex justify-center items-center"
              onClick={() => toggleColor(color == '#020E1A' ? '#ffffff' : '#020E1A')}
            >

              <Image
                src={color == '#020E1A' ? vector16 : group4373}
                alt="Arrow icon"
                width={15}
                height={15}
                className="text-center"
              />
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;