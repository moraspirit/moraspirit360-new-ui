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
        url:"https://s3-alpha-sig.figma.com/img/3e61/8921/dc38dc8307e055c22f00dd537faee76a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=athIPNyxh0XTsRdkvt~ptA3-XLcWvXSp438JoKKHDLK6lBfOZ4-9JBT6SflYTEfaS4~QPO6nikYZnZi92qx8Yt-co-E31O3OstYJXOV47HnoHiBONEuf4VH5dd9pxHcIvocN3lvzpjTbpHBcjX3MXRuYcN2Ejn7rOlsjgioaOwlgdXoqJ-0pYhWDrdqRdWuwub4Jj72to1qaSzajZevgu9DN66e0GYvDRa3GB5xZqnZ4b81GVhCYaC5jeHcWk2Vy9-XZ3vZHf2NB~N7Cx6bsh~J31mh6wqNo6JaHz9icRS90Ni4ezMGLyws0KiN6Keo2tiuOTxo9chUZaW2Lbk3IYA__",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url : "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
        title : "SPIRIT UP 2.O",
        description : "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
    },
    {
        url :"https://s3-alpha-sig.figma.com/img/30ef/b3a2/3947536db4a0f027e4cef083e1b83fa2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eod93LEo1n4vIDEEFIV6MyJnPzLywmFwhwo1aXFXrfyqWDlV-0fTBTRXTeGn7z-KGOAlPTLhDKL3hw2b8hR0i~PgbyEYtwXa6QMkx6qZnj3BoRgZkwxuwHm26VUc7Pr3VNpcMF8t0YDVPQ5aMOcEWo9pB9wnznsAUizbxcm2~RNsdGk~tn7acjy7uo3zj9k7zDM9MKLVAtWxxOzY9HjkoEj67Q8tRSFqjJ~G-KBD6hCKO8MBS6m7vlRJeg5n8HOf4zwJjphldflYCZJZzCZVCCN1O~6jwz0GaNyeqz5okMXiIB6gYSWjysA4xzalD2fiNaAFbzI1NowjRsGTkt69kA__",
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
                    <h1 className=" text-3xl sm:text-4xl font-bold">RELIVE THE HIGHLIGHTS</h1>
                    <h2 className=" text-lg sm:text-xl font-medium">A Glimpse into Our Unforgettable Moments</h2>
                </ScrollRevealDiv>
                <ScrollUpDiv>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-10  justify-items-center items-center gap-y-32 gap-x-10">

                        <ArticleCard
                            img="/EventCard1.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                        />
                        <ArticleCard
                            img="/EventCard2.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                        />
                        <ArticleCard
                            img="/EventCard3.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                        />
                        <ArticleCard
                            img="/EventCard2.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                        />
                        <ArticleCard
                            img="/EventCard2.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
                        />
                        <ArticleCard
                            img="/EventCard1.png"
                            date="NOVEMBER 24, 2024"
                            title="World of Boxing Insights and Stories"
                            desc="Explore the latest in boxing with expert analysis, fighter profiles, and thrilling match recaps. Stay updated on the sport’s most exciting developments and stories from the ring."
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