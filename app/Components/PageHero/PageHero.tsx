import React from 'react'

interface pageHeroProps  {
  imgUrl:string;
  title:string;
  subTitle:string;
  description:string;
}

function PageHero({imgUrl, title, subTitle, description } : pageHeroProps) {
  return (
    <div className=' relative w-full h-[50vh] mb-10 sm:h-[90vh] overflow-hidden text-white'>
        <div className=' absolute w-full h-full flex flex-col gap-1 justify-center items-center z-20 xl:scale-[1.2]'>
            <h1 className=' text-5xl sm:text-8xl font-semibold'>{title}</h1>
            <h2 className=' text-lg sm:text-4xl text-[#CBCBCB] font-medium'>{subTitle}</h2>
            <p className=' text-sm sm:text-xl font-semibold text-mora-red'>{description}</p>
        </div>
        <div className=' absolute w-full h-full bg-black opacity-30 z-10'></div>
        <img className=' object-cover z-0 w-full h-full' src={imgUrl} alt="hero image" />
    </div>
  )
}

export default PageHero