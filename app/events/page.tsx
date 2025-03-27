import EventCard from "../Components/EventCard/EventCard";
import EventGallery from "../Components/EventGallery/EventGallery";
import Footer from "../Components/Footer/Footer";
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
        url:"/event/past1.jpg",
        title : "Epilogue 2023",
        description : "MoraSpirit 360 wrapped up the EXMO exhibition in style with Epilogue 2023, a night filled with mesmerizing performances and unforgettable memories."
    },
    {
        url : "/event/past2.jpg",
        title : "Cricket Fiesta",
        description : "Bringing the sprit of cricket to life, MoraSpirit Cricket Fiesta was an action packed softball tournament with fierce competition and excitement."
    },
    {
        url :"/event/past3.jpg",
        title : "Food Festival",
        description : "The MoraSpirit Food Festival in August, united with a diverse range of flavors and experiences became a paradise for all sorts of food lovers within the university."
    }
]

// gallery content
const galleryImg = [
    "/event/1.jpg",
    "/event/2.jpg",
    "/event/3.jpeg",
    "/event/4.jpeg",
    "/event/5.jpeg",
    "/event/6.jpeg",
    "/event/7.jpeg",
    "/event/8.jpeg",
    "/event/9.jpeg",
    "/event/10.jpeg",
    "/event/11.jpeg",
    "/event/12.jpeg",
    "/event/13.jpg",
    "/event/14.jpg",
    "/event/15.jpg",
    "/event/16.jpg",
    "/event/17.jpg",
    "/event/18.jpg",
    "/event/19.jpg",
    "/event/20.jpg",
    "/event/21.jpg",
    "/event/22.jpg",
    "/event/23.jpg",
    "/event/24.jpg",
]

export default function Home() {
    const eventCard : React.CSSProperties = {
        'width' : '100%',
    }
    

    return (
        <div>
            <PageHero imgUrl={imgUrl} title={title} subTitle={subTitle} description={description} />

            {/* <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">STAY AHEAD</h1>
                    <h2 className=" text-md sm:text-xl font-medium">Discover What's Next on the Horizon</h2>
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
            </section> */}

            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className=" text-3xl sm:text-4xl text-center font-bold">RELIVE THE HIGHLIGHTS</h1>
                    <h2 className=" text-md sm:text-xl text-center font-medium">A Glimpse into Our Unforgettable Moments</h2>
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

            <Footer />
        </div>
    );
}
