'use client'
import React, { useEffect, useRef, useState } from 'react'

interface eventCardProps {
  imgUrl : string;
  delay? : number;
  title? : string;
  description? : string;
  hoverText? : boolean;
  cardStyle? : React.CSSProperties;
}



const EventCard : React.FC<eventCardProps> = ({ imgUrl, delay = 0, title = '', description = '', hoverText = false, cardStyle  }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered ] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if(!element) return;

    const observer = new IntersectionObserver((entries : IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      })
    },{
      threshold: 0
    })

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    }

  },[ref]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div 
      className={` relative  w-[387px] aspect-[3/4]  transition-all ease-out duration-1000 rounded-2xl ${isVisible? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
      style={{...cardStyle, transitionDelay : `${delay}ms`}} 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        hoverText && <>

          <div className=' absolute w-full h-full flex flex-col justify-end rounded-2xl z-20'>
            <div className={` w-full bg-mora-red rounded-b-2xl flex flex-col gap-5 items-center justify-center transition-all duration-700 ease-out overflow-hidden ${ isHovered ? 'h-1/2' : 'h-0'}`}>
              <h1 className=' text-xl font-bold' style={{fontSize:'1.8rem'}}>{title}</h1>
              <p className=' text-xs text-center px-3'>{description}</p>
            </div>
          </div>
          <div className={` absolute w-full h-full bg-black z-10 rounded-2xl transition-all duration-700 ease-out ${isHovered ? ' opacity-60' : ' opacity-0'}`}></div>
        
        </>
      }
      
     

      <img className=' object-cover w-full h-full rounded-2xl border-black border-2 hover:border-mora-red z-0' src={imgUrl} alt="" />
    </div>
  )
}

export default EventCard