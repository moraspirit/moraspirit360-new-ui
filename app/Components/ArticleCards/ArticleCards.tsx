'use client'; // Add this at the top to mark it as a Client Component
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

type EventCardProps = {
    img: string;
    date: string;
    title: string;
    desc: string;
};

const ArticleCard = ({ img, date, title, desc }: EventCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    // Intersection Observer for visibility on scroll
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } 
            });
        }, {
            threshold: 0.1,
        });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [ref]);

    // Mouse hover handlers
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            ref={ref}
            className={`relative flex flex-col h-[70%%] w-full sm:w-[70%] mx-auto transition-all ease-out duration-1000 rounded-2xl ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="overflow-hidden relative rounded-2xl">
                <Image
                    src={img}
                    alt={desc}
                    width={100}
                    height={100}
                    className={`w-full aspect-[3/2] object-cover h-auto transition-transform duration-500 ease-in-out transform ${isHovered ? 'scale-105' : 'scale-100'}`}
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ease-out rounded-2xl ${isHovered ? 'opacity-60' : 'opacity-0'}`}></div>
            </div>

            <div className={`mt-4 text-white transition-transform duration-500 ease-in-out transform ${isHovered ? 'scale-105' : 'scale-100'}`}>
                <h2 className="text-gray-600">{date}</h2>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-6 text-justify font-light">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default ArticleCard;