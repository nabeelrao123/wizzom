import Image from 'next/image';
import vector10 from '../assets/Vector (10).png'
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-black text-white rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div className="space-y-2 sm:space-y-4 col-span-1">
                        <p className="font-manrope text-lg sm:text-[22px] leading-[100%] tracking-[0px]">
                            Home
                        </p>
                        <ul className="space-y-1 sm:space-y-3">
                            {['Case Studies', 'Services', 'Blogs', 'Our Story'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#BCBCBC] font-inter font-normal text-sm sm:text-[16px] leading-[167%] hover:text-blue-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                 
                    <div className="space-y-2 sm:space-y-4 col-span-1">
                        <p className="font-manrope text-lg sm:text-[22px] leading-[100%] tracking-[0px]">
                            Quick Links
                        </p>
                        <ul className="space-y-1 sm:space-y-3">
                            {['Login', 'Webmail', 'Partners', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#BCBCBC] font-inter font-normal text-sm sm:text-[16px] leading-[167%] hover:text-blue-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2 sm:space-y-4 col-span-2 md:col-span-1 mt-4 sm:mt-0">
                        <p className="font-manrope text-lg sm:text-[22px] leading-[100%] tracking-[0px]">
                            Services
                        </p>
                        <ul className="space-y-1 sm:space-y-3">
                            {['Development & Design', 'Marketing', 'Hoisting & Cloud', 'Our Story'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#BCBCBC] font-inter font-normal text-sm sm:text-[16px] leading-[167%] hover:text-blue-600 transition">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2 sm:space-y-4 col-span-2 md:col-span-3 lg:col-span-2 mt-6 sm:mt-0 sm:px-4">
                        <h3 className="font-manrope text-lg sm:text-[22px] leading-[100%] tracking-[0px]">Newsletter</h3>
                        <p className="text-[#BCBCBC] font-inter font-normal text-xs sm:text-sm leading-[167%] mb-2 sm:mb-4">
                            Let's come together and actively participate in the transformative changes taking place.
                        </p>
                        <form className="space-y-2 sm:space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 sm:py-3 bg-gray-300/10 rounded-full shadow-sm 
                                    transition duration-150 text-[#A2A6AA] pr-12 text-sm sm:text-base"
                                    placeholder="Enter email address"
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-[#ff3310] rounded-full flex items-center justify-center">
                                    <Image
                                        src={vector10}
                                        alt="Submit icon"
                                        width={10}
                                        height={10}
                                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-end space-x-2 pt-1">
                            {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map((icon, index) => (
                                <div key={index} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-gray-300/10 hover:bg-gray-300/20 transition">
                                    <FontAwesomeIcon icon={icon} className="text-sm" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700"></div>

                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs sm:text-sm text-[#BCBCBC] text-center md:text-left">
                        © 2023 Your Company. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                            <a 
                                key={item} 
                                href="#" 
                                className="text-[#A2A6AA] hover:text-blue-600 text-xs sm:text-sm transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;