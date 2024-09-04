"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ScrollUpDivProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

const ScrollUpDiv: React.FC<ScrollUpDivProps> = ({ children, delay = 0, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, {
            threshold: 0.1, // Adjust threshold if needed
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref]);

    return (
        <div
            className={` ${className} transition-all ease-out duration-1000 ${isVisible ? ' translate-y-0 opacity-100' : ' translate-y-10 opacity-0'}`}
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollUpDiv;
