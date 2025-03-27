'use client';
import PageHero from "../../Components/PageHero/PageHero";
import ScrollRevealDiv from "../../Components/ScrollRevealSection/ScrollRevealDiv";
import ClientFeedback from "../../Components/ClientFeedback/ClientFeedback";
import ArticleCard from "@/app/Components/ArticleCards/ArticleCards";
import Footer from "../../Components/Footer/Footer";
import ScrollUpDiv from "@/app/Components/ScrollRevealSection/ScrollRevealUp";

//pageHero content
const imgUrl = "/marketingHero.png"
const title = "MARKETING";
const subTitle = "Turning Every Moment into a Lasting Visual Story";
const description = "Capturing the Essence with Precision and Passion";

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

            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className=" text-3xl sm:text-4xl font-bold text-center">RELIVE THE HIGHLIGHTS</h1>
                    <h2 className=" text-lg sm:text-xl font-medium text-center mb-2">A Glimpse into Our Unforgettable Moments</h2>
                </ScrollRevealDiv>
                <ScrollUpDiv>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-15 px-7  justify-items-center items-center gap-y-32 gap-x-10">

                        <ArticleCard
                            img="/article/1.jpg"
                            date="JULY 27, 2024"
                            title="An opening ceremony to remember: Paris 2024 unfolds gracefully along the river Seine"
                            desc="The Paris 2024 Olympic Games truly deserves a golden chapter in history. The grand opening ceremony, set along the iconic Seine River, was historic as the first-ever Olympic opening ceremony held outside a stadium."
                        />
                        <ArticleCard
                            img="/article/2.png"
                            date="AUGUST 27, 2024"
                            title="Sri Lanka's journey in Paralympics: Celebrating Triumphs and Overcoming Challenges"
                            desc="Sri Lanka's memorable Paralympic history, celebrating victories from their debut in 1996 to capturing gold and bronze medals, and looking forward to the 2024 Paralympics with great expectations for their outstanding athletes."
                        />
                    </div>
                </ScrollUpDiv>

            </section>

            <section className="w-full my-6 py-10 text-white flex flex-col items-center gap-2">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl text-center">
                        EXPERIENCES SHARED BY OUR CLIENTS
                    </h1>
                </ScrollRevealDiv>
                <div className="w-full mt-10 sm:mt-5 gap-5">
                    <ClientFeedback />
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
}