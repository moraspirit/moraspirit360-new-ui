"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import "./LinkStyle.css";
import DesktopServicesDropdown from './services/DesktopServicesDropdown';

export default function DesktopNavLinks() {
    const path = usePathname();
    
    return (
        <ul className="absolute text-md right-7 items-center flex flex-row space-x-10 gap-2">
            <li className={path === "/" ? "active" : ""}>
                <Link href="/">Home</Link>
            </li>
            <li>
                <DesktopServicesDropdown />
            </li>
            <li className={path === "/request" ? "active" : ""}>
                <Link href="/request">Request</Link>
            </li>
            <li className={path === "/events" ? "active" : ""}>
                <Link href="/events">Events</Link>
            </li>
            <li className={path === "/articles" ? "active" : ""}>
                <Link href="/articles">Articles</Link>
            </li>
        </ul>
    );
}