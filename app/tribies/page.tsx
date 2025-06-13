import ContactForm from "@/components/ContactForm";
import BuildingDigitalSection from "@/components/BuildingDigitalSection";
import EmpoweringSection from "@/components/EmpoweringSection";
import OurServices from "@/components/OurServices";
import GrowBusinessSection from "@/components/GrowBusniessSection";
import LatestBlog from "@/components/LatestBlog";
import OurSpeakSection from "@/components/OurSpeakSection";
import SliderSection from "@/components/SliderSection";
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
