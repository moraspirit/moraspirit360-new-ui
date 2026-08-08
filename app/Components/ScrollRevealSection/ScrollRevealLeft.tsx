"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollLeftDivProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

const ScrollLeftDiv: React.FC<ScrollLeftDivProps> = ({ children, delay = 0, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                } 
            });
        }, {
            threshold: 0.1, // Adjust threshold if needed
            rootMargin: '0px 0px 40% 0px'
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref]);

    return (
        <div
            className={` ${className} transition-all ease-out duration-1000 ${isVisible ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}`}
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollLeftDiv;