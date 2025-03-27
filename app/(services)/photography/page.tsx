'use client';
import EventCard from "../../Components/EventCard/EventCard";
import EventGallery from "../../Components/EventGallery/EventGallery";
import PageHero from "../../Components/PageHero/PageHero";
import ScrollRevealDiv from "../../Components/ScrollRevealSection/ScrollRevealDiv";
import ClientFeedback from "../../Components/ClientFeedback/ClientFeedback";


//pageHero content
const imgUrl = "/camera.jpg";
const title = "PHOTOGRAPHY";
const subTitle = "Turning Every Moment into a Lasting Visual Story";
const description = "Capturing the Essence with Precision and Passion";

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
        url:"/event/past/1.jpeg",
        title : "Epilogue 2023",
        description : "MoraSpirit 360 wrapped up the EXMO exhibition in style with Epilogue 2023, a night filled with mesmerizing performances and unforgettable memories."
    },
    {
        url : "/event/past/2.jpg",
        title : "Cricket Fiesta",
        description : "Bringing the sprit of cricket to life, MoraSpirit Cricket Fiesta was an action packed softball tournament with fierce competition and excitement."
    },
    {
        url :"/event/past/3.jpeg",
        title : "Food Festival",
        description : "The MoraSpirit Food Festival in August, united with a diverse range of flavors and experiences became a paradise for all sorts of food lovers within the university."
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

//client feed back content
const feedbacks = [
    {
      name: 'Kamal Silva',
      message:'Just wanted to express my gratitude for your exceptional service in university sports. Your dedication and professionalism set you apart, making Moraspirit360 the go-to in the industry. Keep up the fantastic work!',

    },
    {
      name: 'Aruna Udara',
      message: 'Thank you for consistently delivering top-notch service in university sports. Your passion and expertise make Moraspirit360 stand out as the best.'

    },
    {
      name: 'Pasan Jayawardena',
      message: ' Professional and efficient team.  Delivered more than expected!'

    },

  ];



export default function Home() {
    const eventCard : React.CSSProperties = {
        'width' : '100%',
    }

    const navigateToRequest = () => {
        window.location.href = "/request"
    }

    return (
        <div>
            <PageHero imgUrl={imgUrl} title={title} subTitle={subTitle} description={description} />
            <section className=" w-full mt-10 mb-5 my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className=" text-2xl mb-5 sm:text-7xl tracking-widest font-bold">STORIES IN MOTION</h1>

                    <div
                        className=" w-[65%] sm:mt-5 flex text-center justify-center">
                        <p className="text-sm sm:text-xl font-light">At MoraSpirit 360, we believe that every moment deserves to be
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

            <section className="w-full my-6 py-10 text-white flex flex-col items-center gap-2">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                   <h1 className="text-3xl sm:text-4xl text-center">
                      EXPERIENCES SHARED BY OUR CLIENTS
                   </h1>
                </ScrollRevealDiv>
                   <div className="w-full mt-10 sm:mt-5 gap-5">
                   <ClientFeedback/>
                   </div>
            </section>


        </div>
    );
}
