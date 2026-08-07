"use client";
import React from "react";
import styles from "../app/Home.module.css";
import ScrollRevealDiv from "../app/Components/ScrollRevealSection/ScrollRevealDiv";
import ScrollUpDiv from "../app/Components/ScrollRevealSection/ScrollRevealUp";
import EventCard from "../app/Components/EventCard/EventCard";
import Footer from "./Components/Footer/Footer";
import ScrollLeftDiv from "./Components/ScrollRevealSection/ScrollRevealLeft";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  const eventCard: React.CSSProperties = {
    width: "100%",
  };

  function navigateToRequest() {
    window.location.href = "/request";
  }

  function navigateToVideography() {
    window.location.href = "/videography";
  }

  function navigateToPhotography() {
    window.location.href = "/photography";
  }

  function navigateToMarketing() {
    window.location.href = "/marketing";
  }

  function navigateToWebDevelopment() {
    window.location.href = "/digital-solutions";
  }

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

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MoraSpirit 360",
              url: "https://moraspirit360.com",
              logo: "https://moraspirit360.com/white_logo.avif",
              sameAs: [
                "https://www.facebook.com/MoraSpirit360/",
                "https://x.com/moraspiritNews",
                "https://www.instagram.com/moraspirit_official/",
              ],
            }),
          }}
        />
      </Head>
      <div className={styles.heroContainer}>
        <video className={styles.videoBackground} autoPlay muted loop playsInline preload="metadata">
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.darkOverlay}></div>
        {/* Dark overlay */}
        <ScrollRevealDiv className=" absolute w-full h-full flex flex-col justify-center items-center z-10 xl:scale-[1.2]">
          <div className={styles.overlay}>
            {/* <h1 className={`${styles.moraspirit} ${styles.zoomIn}`}>MORASPIRIT</h1>
                        <h1 className={`${styles.title360} ${styles.zoomIn}`}>360</h1> */}
            <Image
              className=" aspect-square min-w-[150px] md:min-w-[250px] lg:min-w-[300px] xl:min-w-[350px]"
              src="/white_logo.avif"
              width={200}
              height={200}
              alt="MoraSpirit360 logo"
            />
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
      <section
        className={`${styles.secondSection} ${styles.scrollUpAnimation} flex flex-col items-center justify-center`}
      >
        <ScrollUpDiv>
          <h1>Bringing Your Vision to Life</h1>
          <p className="font-thin">
            MoraSpirit 360 is your all-in-one partner for exceptional event
            coverage, creative marketing solutions, and end-to-end digital
            product engineering. From capturing every moment with stunning
            photography and videography to building web platforms, mobile apps,
            software systems, and AI-enabled experiences, we bring your vision
            to life. Our team combines creativity, technology, and a deep
            understanding of your goals to deliver outcomes that resonate.
            Whether it's a corporate event, a sports tournament, or a digital
            initiative, MoraSpirit 360 is committed to excellence at every
            step.
          </p>
          <button className={styles.requestButton} onClick={navigateToRequest}>
            REQUEST
          </button>
        </ScrollUpDiv>
      </section>

      {/* third Section */}
      <section className={`${styles.thirdSection} ${styles.scrollUpAnimation}`}>
        <h1>WHAT WE DO BEST</h1>
      </section>

      {/* Photography Section */}
      <section
        className={`${styles.photographySection} ${styles.section} ${styles.scrollUpAnimation}`}
      >
        <ScrollLeftDiv>
          <h1>PHOTOGRAPHY</h1>
          <p>Turning Every Moment into a Lasting Visual Story</p>
          <p>Capturing the Essence with Precision and Passion</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={navigateToRequest}>
              Request
            </button>
            <button className={styles.button} onClick={navigateToPhotography}>
              Learn more
            </button>
          </div>
        </ScrollLeftDiv>
      </section>

      {/* Videography Section */}
      <section
        className={`${styles.videographySection} ${styles.section} ${styles.scrollUpAnimation}`}
      >
        <ScrollLeftDiv>
          <h1>VIDEOGRAPHY</h1>
          <p>Crafting Cinematic Experiences that Inspire</p>
          <p>Bringing Your Vision to Life with Creativity and Technology</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={navigateToRequest}>
              Request
            </button>
            <button className={styles.button} onClick={navigateToVideography}>
              Learn more
            </button>
          </div>
        </ScrollLeftDiv>
      </section>

      {/* Marketing Section */}
      <section
        className={`${styles.marketingSection} ${styles.section} ${styles.scrollUpAnimation}`}
      >
        <ScrollLeftDiv>
          <h1>MARKETING</h1>
          <p>Strategic Campaigns that Drive Results</p>
          <p>Connecting Your Brand with the Right Audience</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={navigateToRequest}>
              Request
            </button>
            <button className={styles.button} onClick={navigateToMarketing}>
              Learn more
            </button>
          </div>
        </ScrollLeftDiv>
      </section>

      {/* Digital Solutions Section */}
      <section
        className={`${styles.webDevelopmentSection} ${styles.section} ${styles.scrollUpAnimation}`}
      >
        <ScrollLeftDiv>
          <h1 className="z-50">DIGITAL SOLUTIONS</h1>
          <p>Web, Mobile, Software, and AI Agentic Products</p>
          <p>Scalable Engineering for Modern Business Needs</p>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={navigateToRequest}>
              Request
            </button>
            <button
              className={styles.button}
              onClick={navigateToWebDevelopment}
            >
              Learn more
            </button>
          </div>
        </ScrollLeftDiv>
      </section>

      {/* Past Events Section */}
      <section className=" w-full my-6 py-10 text-white flex flex-col items-center justify-start gap-2 ">
        <ScrollRevealDiv className="w-full flex flex-col items-center">
          <h1 className=" text-3xl sm:text-4xl font-bold text-center">
            RELIVE THE HIGHLIGHTS
          </h1>
          <h2 className=" text-lg sm:text-xl font-medium text-center">
            A Glimpse into Our Unforgettable Moments
          </h2>
        </ScrollRevealDiv>
        <div className=" w-[80%] mt-10 sm:mt-5 flex flex-col sm:flex-row sm:gap-5 gap-10 flex-1 items-center justify-center">
          {pastEvents.map((event, index) => {
            return (
              <EventCard
                key={index}
                delay={index * 200}
                imgUrl={event.url}
                title={event.title}
                description={event.description}
                hoverText={true}
                cardStyle={eventCard}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
