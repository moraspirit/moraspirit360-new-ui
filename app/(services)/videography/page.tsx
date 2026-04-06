'use client';
import EventCard from "../../Components/EventCard/EventCard";
import EventGallery from "../../Components/EventGallery/EventGallery";
import PageHero from "../../Components/PageHero/PageHero";
import ScrollRevealDiv from "../../Components/ScrollRevealSection/ScrollRevealDiv";
import React from "react";

//pageHero content
const imgUrl = "/VideographyHero.avif";
const title = "VIDEOGRAPHY";
const subTitle = "Turning Every Moment into a Lasting Visual Story";
const description = "Capturing the Essence with Precision and Passion";

//upcoming events content
const upcomingEvents = [
    {
        url:"/careersday.avif",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url : "/Band.avif",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url :"/exmo.avif",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    }
]

//past events content
const pastEvents = [
    {
        url:"/event/past/1.avif",
        title : "Epilogue 2023",
        description : "MoraSpirit 360 wrapped up the EXMO exhibition in style with Epilogue 2023, a night filled with mesmerizing performances and unforgettable memories."
    },
    {
        url : "/event/past/2.avif",
        title : "Cricket Fiesta",
        description : "Bringing the sprit of cricket to life, MoraSpirit Cricket Fiesta was an action packed softball tournament with fierce competition and excitement."
    },
    {
        url :"/event/past/3.avif",
        title : "Food Festival",
        description : "The MoraSpirit Food Festival in August, united with a diverse range of flavors and experiences became a paradise for all sorts of food lovers within the university."
    }
]

// gallery content
const galleryImg = [
    "/event/1.avif",
    "/event/2.avif",
    "/event/3.avif",
    "/event/4.avif",
    "/event/5.avif",
    "/event/6.avif",
    "/event/7.avif",
    "/event/8.avif",
    "/event/9.avif",
    "/event/10.avif",
    "/event/11.avif",
    "/event/12.avif",
    "/event/13.avif",
    "/event/14.avif",
    "/event/15.avif",
    "/event/16.avif",
    "/event/17.avif",
    "/event/18.avif",
    "/event/19.avif",
    "/event/20.avif",
    "/event/21.avif",
    "/event/22.avif",
    "/event/23.avif",
    "/event/24.avif",
]

export default function Home() {
    const eventCard : React.CSSProperties = {
        'width' : '100%',
    }


    function navigateToRequest() {
        window.location.href = "/request";
    }

    return (
        <div>
            <PageHero imgUrl={imgUrl} title={title} subTitle={subTitle} description={description}/>

            <section className=" w-full mt-10 mb-5 my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className="text-3xl mb-5 sm:text-7xl tracking-widest font-bold text-center px-4">STORIES IN MOTION</h1>

                    <div
                        className="w-[90%] sm:w-[65%] sm:mt-5 flex text-center justify-center">
                        <p className="text-base sm:text-xl font-light leading-relaxed">At MoraSpirit 360, we believe that every moment deserves to be
                            captured with precision,
                            creativity, and a touch of cinematic magic. Our videography services are designed to
                            transform
                            your vision into a compelling visual narrative, whether you're looking to immortalize an
                            event,
                            tell your brand's story, or create engaging promotional content. With a team of experienced
                            videographers and cutting-edge technology, we ensure that every project is a masterpiece,
                            tailored to resonate with your audience and leave a lasting impact.</p>
                    </div>
                    <button
                        className={`border-2 w-[150px] h-[50px] text-lg font-bold rounded-2xl mt-10 mb-10 hover:bg-mora-red active:translate-y-1`}
                        onClick={navigateToRequest}
                    >
                        REQUEST
                    </button>

                </ScrollRevealDiv>

            </section>

            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">STAY AHEAD</h1>
                    <h2 className=" text-lg sm:text-xl font-medium">Discover What's Next on the Horizon</h2>
                </ScrollRevealDiv>
                <div
                    className=" w-[80%] mt-10 sm:mt-5 flex flex-col sm:flex-row sm:gap-5 gap-10 flex-1 items-center justify-center">

                    {
                        pastEvents.map((event, index) => {
                            return (
                                <EventCard key={index} delay={index * 200} imgUrl={event.url} title={event.title}
                                           description={event.description} hoverText={true} cardStyle={eventCard}/>
                            )
                        })
                    }
                </div>
            </section>


            <EventGallery eventImg={galleryImg}/>
        </div>
    );
}
