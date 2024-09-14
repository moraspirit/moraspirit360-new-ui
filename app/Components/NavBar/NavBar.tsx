"use client";
import React, {useState} from 'react';
import "./LinkStyle.css"
import DesktopNavLinks from './DesktopNavLinks';
import LogoLink from './LogoLink';
import {usePathname} from "next/navigation";


// @ts-ignore
function MobileNav({open, setOpen}) {
    const path=usePathname()
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>

            <div className="flex flex-col text-white justify-center items-center mt-28 ">
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="/" >
                    Home
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="/services" >
                    Services
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="/request" >
                    Request
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="/events" >
                    Events
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="/articles" >
                    Articles
                </a>
            </div>
        </div>
    )
}

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

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
                    <div className="group z-50 relative w-6 h-6 mr-2 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                        setOpen(!open)
                    }}>
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </div>
            </div>
        </>
    );
}



