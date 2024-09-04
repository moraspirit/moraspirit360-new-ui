import React from 'react';
import styles from '../app/Home/Home.module.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <video className={styles.videoBackground} autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.moraspirit}>MORASPIRIT</h1>
          <h1 className={styles.title360}>360</h1>
          <div className={styles.textContainer}>
            <p className={styles.weGlorify}>WE GLORIFY</p>
            <p className={styles.yourMoment}><span>YOUR MOMENT</span></p>
          </div>
        </div>
      </div>

      {/* New Section */}
      <section className={`${styles.newSection} ${styles.scrollUpAnimation}`}>
        <h1>Bringing Your Vision to Life</h1>
        <p>
          MoraSpirit 360 is your all-in-one partner for exceptional event coverage, creative marketing solutions, and innovative web development. From capturing every moment with stunning photography and videography to promoting your event with targeted marketing strategies, we bring your vision to life. Our team of experts combines creativity, technology, and a deep understanding of your needs to deliver results that resonate. Whether it's a corporate event, a sports tournament, or a digital project, MoraSpirit 360 is committed to excellence at every step.
        </p>
        <button className={styles.requestButton}>REQUEST</button>
      </section>
    </>
  );
};

export default Home;
