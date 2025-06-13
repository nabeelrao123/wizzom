import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
     <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-6xl mx-auto"
      >
    <div className="w-full text-center">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-4">
        <h3 className="text-center">Why Choose Me</h3>
        <div className="flex gap-x-2">
          {/* <CarouselPrevious className="text-red-500 px-3 py-2 border font-bold border-[#434552] rounded-full shadow-lg" />
          <CarouselNext className="text-red-700 px-3 py-2 border font-bold border-[#434552] rounded-full shadow-lg" /> */}
         </div>
      </div>

     
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="h-[280px] bg-[#2A2F45] rounded-[30px] p-4 text-white snap-center shrink-0">
                  <div className="flex items-center mt-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.45 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.062-3.266z" />
                    </svg>
                  </div>

                  <p className="text-sm mt-4 text-[#D4D4D4] leading-[25px]">
                    Lorem dfdipsum dolor sit amet consectetur. Nibh in ut nisl eu. Nam sit sollicitudin non nunc arcu nibh. Aliquet dui pellentesque porttitor lectus urna. Sit euismod nulla..
                  </p>
                  <div className="flex gap-x-4 mt-4">
                    <div className="w-[40px] h-[40px] rounded-full">
                      <img src="./assests/Ellipse 1248.png" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[#D4D4D4] text-sm font-rethink-sans font-semibold">Alexa Simth</p>
                      <p className="text-sm font-rethink-sans text-[#D4D4D4]">Owner at ABC</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
    </div>
    </Carousel>
  )
}