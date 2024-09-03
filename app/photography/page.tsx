import EventCard from "../Components/EventCard/EventCard";
import EventGallery from "../Components/EventGallery/EventGallery";
import PageHero from "../Components/PageHero/PageHero";
import ScrollRevealDiv from "../Components/ScrollRevealSection/ScrollRevealDiv";

//pageHero content
const imgUrl = "https://s3-alpha-sig.figma.com/img/1b1d/b24b/04e3816a4de631732cdb8ac3bf8db255?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pnHl3sRJ0BTmAEwHJwggcOpyvSS4szX9rgNT-Q7Bf4D2L-is~uQxUzZ68SvaDGCk7GC85uR0fTKefY-JRw0Mw-1uTIDTc0uQb7FFrYweMDFT4Z9vpy6aWTKROcS4~qz0Sc7exWaE-1ISFqEUcB1-RihkcEMegSEmR8hu3vkCdol5UHhM~pAnNQdWp2fQxvS5cD677Aa88O9ox0ZJD~s40lYRmE9mPb~2ZaQfUqqbb3xKQbxk2hlrBaFA9w0aqSe7pfL-u4U-ouRO~bWpKyR~u0FyOCE22CyCL394KyZV7pqCeUbbX8v4WzRDM2V1WElfLv5z3izo3eS8S2r9n2bUmQ__"
const title = "PHOTOGRAPHY";
const subTitle = "ELEVATE EVERY OCCATION";
const description = "Where Exceptional Events Come to Life";

//upcoming events content
const upcomingEvents = [
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

// gallery content
const galleryImg = [
    "https://s3-alpha-sig.figma.com/img/b010/9441/d29221e271a53ad689d5a886234a929c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSEyWdxsWAmCokA0kVviNzUSx4K5YJQ4Q7blt0BWroNALxSG7O327QYKsj2FyEGSkNm12j5RxjDIs~yFY8WcqSyBYCkW~tX9W0PgHkAJFcqWTBm7-rQyHy5f7d68qTTCTCKH41RI9NS8x2DAaRmsT36Tp~rrBW-5Y-aXkZhDAakzGgQihj41kqfSk89BN63SWamtbrrzzhNknvG6Sjxx8g4CX-GsQAcyY2vqMCvcOMJNg0e~aCJ6DhbI5Ps97FmmRMxYyhpNJm7KLl0csa8PzoAmspQ5lXAB06qWnXfdS~qPha7lHOzoItMkondpVUn6amLgSuATsrSENr1UOhJABw__",
    "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
    "https://s3-alpha-sig.figma.com/img/b010/9441/d29221e271a53ad689d5a886234a929c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSEyWdxsWAmCokA0kVviNzUSx4K5YJQ4Q7blt0BWroNALxSG7O327QYKsj2FyEGSkNm12j5RxjDIs~yFY8WcqSyBYCkW~tX9W0PgHkAJFcqWTBm7-rQyHy5f7d68qTTCTCKH41RI9NS8x2DAaRmsT36Tp~rrBW-5Y-aXkZhDAakzGgQihj41kqfSk89BN63SWamtbrrzzhNknvG6Sjxx8g4CX-GsQAcyY2vqMCvcOMJNg0e~aCJ6DhbI5Ps97FmmRMxYyhpNJm7KLl0csa8PzoAmspQ5lXAB06qWnXfdS~qPha7lHOzoItMkondpVUn6amLgSuATsrSENr1UOhJABw__",
    "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
    "https://s3-alpha-sig.figma.com/img/b010/9441/d29221e271a53ad689d5a886234a929c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSEyWdxsWAmCokA0kVviNzUSx4K5YJQ4Q7blt0BWroNALxSG7O327QYKsj2FyEGSkNm12j5RxjDIs~yFY8WcqSyBYCkW~tX9W0PgHkAJFcqWTBm7-rQyHy5f7d68qTTCTCKH41RI9NS8x2DAaRmsT36Tp~rrBW-5Y-aXkZhDAakzGgQihj41kqfSk89BN63SWamtbrrzzhNknvG6Sjxx8g4CX-GsQAcyY2vqMCvcOMJNg0e~aCJ6DhbI5Ps97FmmRMxYyhpNJm7KLl0csa8PzoAmspQ5lXAB06qWnXfdS~qPha7lHOzoItMkondpVUn6amLgSuATsrSENr1UOhJABw__",
    "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
    "https://s3-alpha-sig.figma.com/img/b010/9441/d29221e271a53ad689d5a886234a929c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSEyWdxsWAmCokA0kVviNzUSx4K5YJQ4Q7blt0BWroNALxSG7O327QYKsj2FyEGSkNm12j5RxjDIs~yFY8WcqSyBYCkW~tX9W0PgHkAJFcqWTBm7-rQyHy5f7d68qTTCTCKH41RI9NS8x2DAaRmsT36Tp~rrBW-5Y-aXkZhDAakzGgQihj41kqfSk89BN63SWamtbrrzzhNknvG6Sjxx8g4CX-GsQAcyY2vqMCvcOMJNg0e~aCJ6DhbI5Ps97FmmRMxYyhpNJm7KLl0csa8PzoAmspQ5lXAB06qWnXfdS~qPha7lHOzoItMkondpVUn6amLgSuATsrSENr1UOhJABw__",
    "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
    "https://s3-alpha-sig.figma.com/img/b010/9441/d29221e271a53ad689d5a886234a929c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSEyWdxsWAmCokA0kVviNzUSx4K5YJQ4Q7blt0BWroNALxSG7O327QYKsj2FyEGSkNm12j5RxjDIs~yFY8WcqSyBYCkW~tX9W0PgHkAJFcqWTBm7-rQyHy5f7d68qTTCTCKH41RI9NS8x2DAaRmsT36Tp~rrBW-5Y-aXkZhDAakzGgQihj41kqfSk89BN63SWamtbrrzzhNknvG6Sjxx8g4CX-GsQAcyY2vqMCvcOMJNg0e~aCJ6DhbI5Ps97FmmRMxYyhpNJm7KLl0csa8PzoAmspQ5lXAB06qWnXfdS~qPha7lHOzoItMkondpVUn6amLgSuATsrSENr1UOhJABw__",
    "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__"
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
                    <h2 className=" text-lg sm:text-xl font-medium">Discover  Next on the Horizon</h2>
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
