import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import img4618 from '../assets/image 4618 (1).png'


const CaroselsCard = () => {
    return (
        <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                    key={index}
                    className="sm:basis-1/2  md:basis-[390px] "
                >
                    <div className="p-1">
                        <Card className={`bg-[#2A2F45] w-full gap-x-10 rounded-3xl border-none px-1 py-8 ${index % 2 == 0 ? 'mt-11' : 'mt-0'}   `}>
                            <CardContent className="px-3 py-2">
                                {/* <div className="flex"> */}
                                <div className="relative w-full h-[250px]">
                                    <Image
                                        alt=""
                                        src={img4618}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold mt-3 text-xl text-white ">This will be project </p>
                                    <p className="text-sm mt-3 text-[#D4D4D4] ">Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit
                                        sollicitudin non
                                        nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla..</p>

                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>

    );
};

export default function OurSpeakSection() {
    return (
        <div className="w-full mt-[100px]">
            <Carousel opts={{ align: "start" }}>

                <div className="max-w-[1400px] w-[90%] mx-auto">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8 md:gap-y-0 mb-10 " >
                            <div>
                                <p className="text-3xl md:text-4xl font-semibold  text-white">
                                    Our Work Speaks for Itself
                                </p>

                                <div className="flex-col mt-4 gap-y-8  md:flex md:gap-x-3" >
                                    <button className="bg-[#ff3310] px-5 rounded-full py-2 text-center text-white" >All</button>
                                    {['Marketing', 'Hosting & Cloud', 'Development & Design'].map((cval) => {
                                        return (<>
                                            <button className="bg-[#272937] px-5 rounded-full py-2 text-center text-white" >{cval}</button>
                                        </>)
                                    })}
                                </div>
                            </div>
                            <div>
                                <p className="text-sm  text-[#D4D4D4] text-center leading-[25px]">
                                    Lorem ipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla...
                                </p>
                                <div className="flex gap-2 justify-end items-end">
                                    <CarouselPrevious className="border border-[#434552] text-white relative top-0 left-0 translate-y-0" />
                                    <CarouselNext className="border border-[#434552] text-white relative top-0 left-0 translate-y-0" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <CaroselsCard />
            </Carousel>

        </div>




        
    );
}
