// components/Footer.js
import React from 'react';
import styles from '../Footer/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.innerContainer}>
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>CONTACT</h3>
          <p className={styles.contactText}>077 842 3916</p>
          <p className={styles.contactText}>moraspirit360@moraspirit.com</p>
          <p className={styles.contactText}>125, 56A Peterson Ln, Colombo, Sri Lanka</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.iconLink}>
            <img src="/fb.png" alt="Facebook" className={styles.iconImage} />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/ig.png" alt="Instagram" className={styles.iconImage} />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/youtube.png" alt="YouTube" className={styles.iconImage} />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/twitt.png" alt="Twitter" className={styles.iconImage} />
          </a>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className={styles.copyrightText}>
          Copyright © 2024. Moraspirit Initiative. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
