'use client';
import React from 'react';
import styles from '../app/Home.module.css'; // Adjust the import path as necessary
import ScrollRevealDiv from "../app/Components/ScrollRevealSection/ScrollRevealDiv";
import ScrollUpDiv from "../app/Components/ScrollRevealSection/ScrollRevealUp"
import EventCard from "../app/Components/EventCard/EventCard";
import Footer from './Components/Footer/Footer';

const Home = () => {
    const eventCard : React.CSSProperties = {
        'width' : '100%',
    }

    function navigateToRequest() {
        window.location.href = "/request";
    }

    function navigateToVideography() {
        window.location.href = "/videography";
    }

    function navigateToPhotography() {
        window.location.href = "/photography";
    }

    function navigateToMarketing(){
        window.location.href = "/marketing";
    }

    const pastEvents = [
        {
            url: "https://s3-alpha-sig.figma.com/img/3e61/8921/dc38dc8307e055c22f00dd537faee76a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=athIPNyxh0XTsRdkvt~ptA3-XLcWvXSp438JoKKHDLK6lBfOZ4-9JBT6SflYTEfaS4~QPO6nikYZnZi92qx8Yt-co-E31O3OstYJXOV47HnoHiBONEuf4VH5dd9pxHcIvocN3lvzpjTbpHBcjX3MXRuYcN2Ejn7rOlsjgioaOwlgdXoqJ-0pYhWDrdqRdWuwub4Jj72to1qaSzajZevgu9DN66e0GYvDRa3GB5xZqnZ4b81GVhCYaC5jeHcWk2Vy9-XZ3vZHf2NB~N7Cx6bsh~J31mh6wqNo6JaHz9icRS90Ni4ezMGLyws0KiN6Keo2tiuOTxo9chUZaW2Lbk3IYA__",
            title: "SPIRIT UP 2.O",
            description: "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
        },
        {
            url: "https://s3-alpha-sig.figma.com/img/3c1a/aeb7/e89f189de0f33a90a1de10d2e653c98e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nEnd3szT5xFErKqRxeFMrdc44SZRQKXg4aK5WLm75Chjw5G3E8T6UOxkD8-ncMxn5yEObRQ9TA5rSgYe73nv1IzPANtkDJ4c-gzDj~gZGsNEuZEhcn5ZZA-nMDyeDnyupNnoA3iCVSr2nv-79hey3PE-AjQmi~bkF-cuy6EwTIrcQ4o0wbNIrg2e4u-VomoVP7COdM2745paBVyjoiVm5DTzeJ0iTMAPt2BZcCQsIFa0~wtXiZvq6wxbRVOLZZQWJ8eMZCcuXWF-tfQ1ctifl0Bfkvxw0FTrtZmRH3jTGM6RKW2TTX4wyCTqPbCONqhBc7VAKUsnUlOx2V~rH5tycQ__",
            title: "SPIRIT UP 2.O",
            description: "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
        },
        {
            url: "https://s3-alpha-sig.figma.com/img/30ef/b3a2/3947536db4a0f027e4cef083e1b83fa2?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eod93LEo1n4vIDEEFIV6MyJnPzLywmFwhwo1aXFXrfyqWDlV-0fTBTRXTeGn7z-KGOAlPTLhDKL3hw2b8hR0i~PgbyEYtwXa6QMkx6qZnj3BoRgZkwxuwHm26VUc7Pr3VNpcMF8t0YDVPQ5aMOcEWo9pB9wnznsAUizbxcm2~RNsdGk~tn7acjy7uo3zj9k7zDM9MKLVAtWxxOzY9HjkoEj67Q8tRSFqjJ~G-KBD6hCKO8MBS6m7vlRJeg5n8HOf4zwJjphldflYCZJZzCZVCCN1O~6jwz0GaNyeqz5okMXiIB6gYSWjysA4xzalD2fiNaAFbzI1NowjRsGTkt69kA__",
            title: "SPIRIT UP 2.O",
            description: "UNIVERSITY ESPORTS CHALLENGE 2024, E-WAR is now open for REGISTRATION. BE A GAME CHANGER, as fear should never overshadow your dreams."
        }
    ];

    return (
        <>

            <div className={styles.heroContainer}>
                <video className={styles.videoBackground} autoPlay muted loop>
                    <source src="/hero.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className={styles.darkOverlay}></div>
                {/* Dark overlay */}
                <ScrollRevealDiv className=' absolute w-full h-full flex flex-col justify-center items-center z-10 xl:scale-[1.2]'>
                    <div className={styles.overlay}>
                        <h1 className={`${styles.moraspirit} ${styles.zoomIn}`}>MORASPIRIT</h1>
                        <h1 className={`${styles.title360} ${styles.zoomIn}`}>360</h1>
                        <div className={`${styles.textContainer} ${styles.zoomIn}`}>
                            <p className={styles.weGlorify}>WE GLORIFY</p>
                            <p className={styles.yourMoment}>
                                <span>YOUR MOMENT</span>
                            </p>
                        </div>
                    </div>
                </ScrollRevealDiv>
            </div>


            {/* Second Section */}
            <section className={`${styles.secondSection} ${styles.scrollUpAnimation}`}>
                <ScrollUpDiv>
                    <h1>Bringing Your Vision to Life</h1>
                    <p>
                        MoraSpirit 360 is your all-in-one partner for exceptional event coverage, creative marketing
                        solutions, and innovative web development. From capturing every moment with stunning photography
                        and videography to promoting your event with targeted marketing strategies, we bring your vision
                        to life. Our team of experts combines creativity, technology, and a deep understanding of your
                        needs to deliver results that resonate. Whether it's a corporate event, a sports tournament, or
                        a digital project, MoraSpirit 360 is committed to excellence at every step.
                    </p>
                    <button className={styles.requestButton} onClick={navigateToRequest}>REQUEST</button>
                </ScrollUpDiv>
            </section>

            {/* third Section */}
            <section className={`${styles.thirdSection} ${styles.scrollUpAnimation}`}>
                <h1>WHAT WE DO BEST</h1>
            </section>


            {/* Photography Section */}
            <section className={`${styles.photographySection} ${styles.section} ${styles.scrollUpAnimation}`}>
                <ScrollUpDiv>
                    <h1>PHOTOGRAPHY</h1>
                    <p>Turning Every Moment into a Lasting Visual Story</p>
                    <p>Capturing the Essence with Precision and Passion</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}  onClick={navigateToRequest}>Request</button>
                        <button className={styles.button} onClick={navigateToPhotography}>Learn more</button>
                    </div>

                </ScrollUpDiv>
            </section>

            {/* Videography Section */}
            <section className={`${styles.videographySection} ${styles.section} ${styles.scrollUpAnimation}`}>
                <ScrollUpDiv>
                    <h1>VIDEOGRAPHY</h1>
                    <p>Crafting Cinematic Experiences that Inspire</p>
                    <p>Bringing Your Vision to Life with Creativity and Technology</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={navigateToRequest}>Request</button>
                        <button className={styles.button} onClick={navigateToVideography}>Learn more</button>
                    </div>
                </ScrollUpDiv>
            </section>

            {/* Marketing Section */}
            <section className={`${styles.marketingSection} ${styles.section} ${styles.scrollUpAnimation}`}>
                <ScrollUpDiv>
                    <h1>MARKETING</h1>
                    <p>Strategic Campaigns that Drive Results</p>
                    <p>Connecting Your Brand with the Right Audience</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={navigateToRequest}>Request</button>
                        <button className={styles.button} onClick={navigateToMarketing}>Learn more</button>
                    </div>
                </ScrollUpDiv>
            </section>

            {/* Web Development Section */}
            <section className={`${styles.webDevelopmentSection} ${styles.section} ${styles.scrollUpAnimation}`}>
                <ScrollUpDiv>
                    <h1 className='z-50'>WEB DEVELOPMENT</h1>
                    <p>Building Digital Platforms that Empower Your Business</p>
                    <p>Innovative Solutions for the Modern Web</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={navigateToRequest}>Request</button>
                        <button className={styles.button}>Learn more</button>
                    </div>
                </ScrollUpDiv>
            </section>

            {/* Past Events Section */}
            <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
                <ScrollRevealDiv className="w-full flex flex-col items-center">
                    <h1 className=" text-3xl sm:text-4xl font-bold">RELIVE THE HIGHLIGHTS</h1>
                    <h2 className=" text-lg sm:text-xl font-medium">A Glimpse into Our Unforgettable Moments</h2>
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
            <Footer></Footer>


        </>
    );
};


export default Home;