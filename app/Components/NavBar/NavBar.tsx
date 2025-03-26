"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import MobileServicesDropdown from './services/MobileServicesDropdown';
import LogoLink from './LogoLink';
import DesktopNavLinks from './DesktopNavLinks';
import { motion } from 'framer-motion';

interface MobileNavProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: open ? "0%" : "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 left-0 h-screen w-screen bg-black filter"
        >
            <div className="flex flex-col text-white justify-center items-center mt-28 space-y-4">
                <Link 
                    className="text-2xl font-bold hover:text-red-500" 
                    href="/"
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
                
                <MobileServicesDropdown onServiceSelect={handleLinkClick} />
                
                <Link 
                    className="text-2xl font-bold hover:text-red-500" 
                    href="/request"
                    onClick={handleLinkClick}
                >
                    Request
                </Link>
                
                <Link 
                    className="text-2xl font-bold hover:text-red-500" 
                    href="/events"
                    onClick={handleLinkClick}
                >
                    Events
                </Link>
                
                <Link 
                    className="text-2xl font-bold hover:text-red-500" 
                    href="/articles"
                    onClick={handleLinkClick}
                >
                    Articles
                </Link>
            </div>
        </motion.div>
    );
};

const NavBar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="hidden relative py-4 sm:flex flex-col justify-center">
                <LogoLink/>
                <DesktopNavLinks/>
            </div>
            <div className="sm:hidden relative flex flex-row my-4 z-50">
                <LogoLink/>
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-11/12 flex justify-end items-center">
                    <div 
                        className="group z-50 relative w-6 h-6 mr-2 cursor-pointer flex-col justify-between items-center flex" 
                        onClick={() => setOpen(!open)}
                    >
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;