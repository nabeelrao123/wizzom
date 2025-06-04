'use client'

import Image from 'next/image';
import vector11 from '../assets/Vector (11).png'
import img4 from '../assets/image (4).png'
import vector12 from '../assets/Vector (12).png'
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';

const ContactForm = () => {
  const color = useSelector((state: RootState) => state.color.color);
  let  bgColor =   color == '#ffffff' ? '#E5E5E5' : 'var(--Colors-Chilled-Surface-light, #272937)' ;
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90%] mx-auto p-6 sm:p-10  rounded-2xl"
         style={{ backgroundColor: bgColor }}>
        <p className={`text-sm ${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'} leading-relaxed font-inter mb-8 sm:mb-10  font-inter  `}>
          Have a question or need assistance? We're here to help! Reach out today, and let's create something
          amazing together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative h-64">
              <Image
                // src="/assets/image (4).png"

                src={img4}
                alt="Contact illustration"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-blue-50/20">
                  <Image
                    src={vector11}
                    alt="Phone icon"
                    width={14}
                    height={14}
                  />
                </div>
                <div>
                  <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'}  text-sm font-inter`}>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-blue-50/20">
                  <Image
                    // src="/assets/Vector (11).png"
                    src={vector11}
                    alt="Email icon"
                    width={14}
                    height={14}
                  />
                </div>
                <div>
                  <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'}  text-sm  font-inter`}>contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-blue-50/20">
                  <Image
                    // src="/assets/Vector (12).png"
                    src={vector12}
                    alt="Location icon"
                    width={14}
                    height={14}
                  />
                </div>
                <div>
                  <p className={`${color == '#ffffff' ? 'text-[#404040]' : 'text-[#D4D4D4]'}  text-sm  font-inter`}>123 Business Ave, Suite 100 New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className={`w-full px-4 py-3 ${color == '#ffffff' ? 'bg-[#F5F5F5]' : 'bg-[#434552]'} rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${color == '#ffffff' ? 'bg-[#A3A3A3]' : 'text-[#ffffff]'}`}
            />

            <input
              type="email"
              placeholder="Email"
              className={`w-full px-4 py-3 ${color == '#ffffff' ? 'bg-[#F5F5F5]' : 'bg-[#434552]'} rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${color == '#ffffff' ? 'bg-[#A3A3A3]' : 'text-[#ffffff]'}`}
            />

            <input
              type="text"
              placeholder="Subject"
              className={`w-full px-4 py-3 ${color == '#ffffff' ? 'bg-[#F5F5F5]' : 'bg-[#434552]'} rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${color == '#ffffff' ? 'bg-[#A3A3A3]' : 'text-[#ffffff]'}`} />

            <textarea
              placeholder="Your Message"
              rows={4}
                  className={`w-full px-4 py-3 ${color == '#ffffff' ? 'bg-[#F5F5F5]' : 'bg-[#434552]'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ${color == '#ffffff' ? 'bg-[#A3A3A3]' : 'text-[#ffffff]'}`} 
        
        ></textarea>

            <div className="flex justify-end">
              <button
                type="button"
                className="flex rounded-full justify-center py-3 px-6 shadow-sm text-sm font-medium text-white bg-[#ff3310] hover:bg-accent/90 transition"
              >
                Talk to our Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;