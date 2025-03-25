'use client'

import React, { useEffect, useState } from 'react'
import EventCard from '../EventCard/EventCard'
import ScrollRevealDiv from '../ScrollRevealSection/ScrollRevealDiv';

interface eventGalleryProps {
    eventImg : string[];
}


const EventGallery : React.FC<eventGalleryProps> = ({eventImg}) => {
    const [events, setEvents] = useState(['']);
    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        setEvents(eventImg.slice(0,6));
        setLoaded(6);
    },[])

    const loadMore = () => {
        setEvents(eventImg.slice(0, loaded + 6));
        setLoaded(loaded + 6);
    };

    const galleryCard : React.CSSProperties = {
        'width' : '100%',
        'aspectRatio' : '1/1'
    }

  return (
    <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
        <ScrollRevealDiv className="w-full flex flex-col items-center">
            <h1 className=" text-3xl sm:text-4xl text-center font-bold">EXPLORE OUR JOURNEY</h1>
        </ScrollRevealDiv>
        <div className=" w-[80%] mt-10 grid grid-col-1 sm:grid-cols-3 gap-5 ">
            {
                events.map((imgUrl, index) => {
                    return (
                        <EventCard key={index} delay={(index%3) * 200} imgUrl={imgUrl} cardStyle={galleryCard} />
                    );
                })
            }
        </div>
        <button 
            className={`border-2 w-[150px] h-[50px] text-lg font-bold rounded-2xl mt-10 hover:bg-mora-red active:translate-y-1 ${loaded >= eventImg.length ? 'hidden' : 'block'}`}
            onClick={loadMore}
        >
            VIEW MORE
        </button>
    </section>
  )
}

export default EventGallery