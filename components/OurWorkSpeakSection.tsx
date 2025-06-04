import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ellipse1248 from '../assets/Ellipse 1248.png';
import Image from 'next/image';
import imgrigth from '../assets/quote-right_svgrepo.com (1).png'


export default function OurWorkSpeakSection() {
    return (
        <div className="w-full mt-[30px]">
            <div className="max-w-[1400px] w-[90%]  mx-auto">
                <Carousel opts={{ align: "start" }}>
                    <div className="w-full">
                        <p className="text-3xl font-semibold text-center mb-8 text-white">
                            What People Are Saying?
                        </p>

                        {/* Carousel content */}
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className=" sm:basis-1/2  md:flex-none w-[410px]" // Fixed width cards
                                >
                                    <div className="p-1">
                                        <Card className="bg-[#272937] w-full rounded-[25px] border-none h-[280px]">
                                            <CardContent className="px-7 py-5 ">

                                                <div className="flex mt-2 justify-between " >
                                                    <div className="flex items-center mt-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                className="w-5 h-5 text-[#FFC46B]"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                                                            </svg>
                                                        ))}

                                                    </div>
                                                    <div> <Image src={imgrigth} alt=""
                                                    width={26}
                                                    height={26}
                                                    className="object-contain"
                                                    /> </div>
                                            </div>

                                            <div>
                                                <p className="text-sm mt-4 text-[#D4D4D4] leading-[25px]">
                                                    Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla...
                                                </p>
                                                <div className="flex gap-x-4 mt-8">
                                                    <div className="w-[40px] h-[40px] rounded-full">
                                                        <Image
                                                            src={ellipse1248}
                                                            width={40}
                                                            height={40}
                                                            className="w-full h-full object-contain rounded-full"
                                                            alt="Profile image"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-[#D4D4D4] text-sm font-semibold font-rethink-sans">
                                                            Alexa Smith
                                                        </p>
                                                        <p className="text-sm text-[#D4D4D4] font-rethink-sans">
                                                            Owner at ABC
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                </CarouselItem>
                            ))}
                    </CarouselContent>

                    <div className="flex gap-2 justify-center items-center mt-8">
                        <CarouselPrevious className="border border-[#434552] text-white relative top-0 left-0 translate-y-0" />
                        <CarouselNext className="border border-[#434552] text-white relative top-0 left-0 translate-y-0" />
                    </div>
            </div>
        </Carousel>
            </div >
        </div >
    );
}
