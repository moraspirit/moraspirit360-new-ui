"use client";
import React, { useState } from 'react';
import DesktopNavLinks from './DesktopNavLinks';
import LogoLink from './LogoLink';
import MobileDrawer from './MobileDrawer';
import MobileMenuButton from './MobileMenuButton';

export default function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="hidden mb-3 relative py-4 sm:flex flex-col justify-center">
                <LogoLink />
                <DesktopNavLinks />
            </div>
            <div className="sm:hidden relative flex flex-row my-4">
                <LogoLink />
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </>
    );
}