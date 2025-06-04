'use client';
import { ReactNode } from "react";
import "./globals.css";
import './globals.css'
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface RootLayoutProps {
    children: ReactNode;
}

const ClientLayout = ({ children }: RootLayoutProps) => {
    const color = useSelector((state: RootState) => state.color.color);

    // `flex-1 overflow-auto p-4  bg-[${color}]`
    return (
        <div className={`bg-[${color}]`}>
            <Navbar />
            {/* {children} */}
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />

        </div>
    );
};

export default ClientLayout;
