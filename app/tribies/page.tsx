import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSize } from "@/components/ReviewSection";
// import { WhyChooseUs } from "@/components/WhyChooseUs";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import Head from 'next/head';
import { WhatPeopleSaySection } from "@/components/WhatPeopleSaySection";
import ContactForm from "@/components/ContactForm";
import HowWeWork from "@/components/HowDoWeWorkSection";
import HowDoWeWorkSection from "@/components/HowDoWeWorkSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import DesignServices from "@/components/DesignServices";
import OurWorkSpeakSection from "@/components/OurWorkSpeakSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LetsTalk from "@/components/LetsTalk";
import BuildingDigitalSection from "@/components/BuildingDigitalSection";
import EmpoweringSection from "@/components/EmpoweringSection";
import OurServices from "@/components/OurServices";
import GrowBusinessSection from "@/components/GrowBusniessSection";
import LatestBlog from "@/components/LatestBlog";
import OurSpeakSection from "@/components/OurSpeakSection";
import SliderSection from "@/components/SliderSection";
// import  OurSpeakSection from '@'
export default function Home() {
    return (
        <div>


            <BuildingDigitalSection />
            <SliderSection/>
            <EmpoweringSection />
            <OurServices />
            <GrowBusinessSection />
            <LatestBlog/>
            <OurSpeakSection/>
           <ContactForm />

            {/* <DevelopmentSection />
            <DesignServices />
            <WhatPeopleSaySection />
            <WhyChooseUs />
            <HowDoWeWorkSection />
            <OurWorkSpeakSection />
            <ContactForm /> */}

        </div>
    );
}
