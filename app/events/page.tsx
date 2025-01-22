import EventCard from "../Components/EventCard/EventCard";
import EventGallery from "../Components/EventGallery/EventGallery";
import PageHero from "../Components/PageHero/PageHero";
import ScrollRevealDiv from "../Components/ScrollRevealSection/ScrollRevealDiv";

//pageHero content
const imgUrl = "/eventpage.jpg";
const title = "360 EVENTS";
const subTitle = "ELEVATE EVERY OCCATION";
const description = "Where Exceptional Events Come to Life";

//upcoming events content
const upcomingEvents = [
    {
        url:"/careersday.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url : "/Band.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url :"/exmo.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    }
]

//past events content
const pastEvents = [
    {
        url:"/careersday.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url : "/nightshow.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url :"/cricket.jpg",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    }
]

// gallery content
const galleryImg = [
    "/cups.jpg",
    "/Band.jpg",
    "/exmo.jpg",
    "/nightshow.jpg",
    "/cups.jpg",
    "/careersday.jpg",
    "/band.jpg",
    "/nightshow.jpg"
]

export default function Home() {
    const eventCard : React.CSSProperties = {
        'width' : '100%',
    }
    

    return (
        <div>
            <PageHero imgUrl={imgUrl} title={title} subTitle={subTitle} description={description} />

            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">STAY AHEAD</h1>
                    <h2 className=" text-lg sm:text-xl font-medium">Discover What's Next on the Horizon</h2>
                </ScrollRevealDiv>
                <div className=" w-[80%] mt-10 sm:mt-5 flex flex-col sm:flex-row sm:gap-5 gap-10 flex-1 items-center justify-center">
                    
                    {
                        upcomingEvents.map((event, index) => {
                            return (
                                <EventCard key={index} delay={index * 200} imgUrl={event.url} title={event.title} description={event.description} hoverText={true} cardStyle={eventCard}/>
                            )
                        })
                    }
                </div>
            </section>

            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className=" text-3xl sm:text-4xl font-bold">RELIVE THE HIGHLIGHTS</h1>
                    <h2 className=" text-lg sm:text-xl font-medium">A Glimpse into Our Unforgettable Moments</h2>
                </ScrollRevealDiv>
                <div className=" w-[80%] mt-10 sm:mt-5 flex flex-col sm:flex-row sm:gap-5 gap-10 flex-1 items-center justify-center">
                    {
                        pastEvents.map((event, index) => {
                            return (
                                <EventCard key={index} delay={index * 200} imgUrl={event.url} title={event.title} description={event.description} hoverText={true} cardStyle={eventCard}/>
                            )
                        })
                    }
                </div>
            </section>

            <EventGallery eventImg={galleryImg}/>
        </div>
    );
}
