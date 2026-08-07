"use client"


import React, { Children, useEffect, useRef, useState } from 'react'

interface ScrollRevealDivProps {
    children : React.ReactNode;
    delay? : string;
    className? : string;
}

const ScrollRevealDiv : React.FC<ScrollRevealDivProps> = ({children, delay = 0, className} ) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;

        if(!element) return;

        const observer = new IntersectionObserver((entries : IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            })
        },{
            threshold : 0,
            rootMargin: '0px 0px 40% 0px'
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        }

    },[ref])

  return (
    <div 
        className={` ${className} transition-all ease-out duration-1000 ${isVisible ? ' opacity-100 scale-100' : ' opacity-0 scale-50' }`}
        ref={ref}
        style={{transitionDelay : `${delay}ms`}}
    >
        {children}
    </div>
  )
}

export default ScrollRevealDiv