import React from 'react'
import ScrollRevealDiv from "@/app/Components/ScrollRevealSection/ScrollRevealDiv";

interface pageHeroProps {
    imgUrl: string;
    title: string;
    subTitle: string;
    description: string;
}

function PageHero({imgUrl, title, subTitle, description}: pageHeroProps) {
    return (
        <div className=' relative w-full h-[50vh] mb-10 sm:h-[90vh] overflow-hidden text-white'>
            <ScrollRevealDiv
                className=' absolute w-full h-full flex flex-col gap-1 justify-center items-center z-10 xl:scale-[1.2]'>

                <h1 className='text-5xl sm:text-8xl text-center px-4 font-semibold tracking-tighter'>{title}</h1>
                <h2 className='text-lg sm:text-4xl text-center px-4 text-[#CBCBCB] tracking-tighter font-semibold'>{subTitle}</h2>
                <p className='text-base sm:text-xl text-center px-4 font-semibold text-[#CBCBCB]'>{description}</p>

            </ScrollRevealDiv>
            <div className=' absolute w-full h-full bg-black opacity-30'></div>
            <img className=' object-cover z-0 w-full h-full' src={imgUrl} alt="hero image"/>
        </div>
    )
}

export default PageHero
