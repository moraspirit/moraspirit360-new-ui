// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.innerContainer}>
        <div style={styles.contactSection}>
          <h3 style={styles.contactTitle}>CONTACT</h3>
          <p style={styles.contactText}>077 842 3916</p>
          <p style={styles.contactText}>moraspirit360@moraspirit.com</p>
          <p style={styles.contactText}>125, 56A Peterson Ln, Colombo, Sri Lanka</p>
        </div>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.iconLink}>
            <img src="/fb.png" alt="Facebook" style={styles.iconImage} />
          </a>
          <a href="#" style={styles.iconLink}>
            <img src="/ig.png" alt="Instagram" style={styles.iconImage} />
          </a>
          <a href="#" style={styles.iconLink}>
            <img src="/youtube.png" alt="YouTube" style={styles.iconImage} />
          </a>
          <a href="#" style={styles.iconLink}>
            <img src="/twitt.png" alt="Twitter" style={styles.iconImage} />
          </a>
        </div>
      </div>
      <div style={styles.copyrightSection}>
        <p style={styles.copyrightText}>
          Copyright © 2024. Moraspirit Initiative. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '10px',
    flexWrap: 'wrap',
  },
  contactSection: {
    textAlign: 'left',
    flexBasis: '100%',
    marginBottom: '20px',
  },
  contactTitle: {
    color: '#ff0000',
    marginBottom: '10px',
  },
  contactText: {
    margin: '5px 0',
  },
  socialIcons: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    flexBasis: '100%',
    marginBottom: '20px',
  },
  iconLink: {
    display: 'inline-block',
    textDecoration: 'none',
  },
  iconImage: {
    width: '24px',
    height: '24px',
  },
  copyrightSection: {
    textAlign: 'center',
    width: '100%',
    paddingTop: '10px',
  },
  copyrightText: {
    marginBottom: '20px',
  },
  '@media (min-width: 600px)': {
    contactSection: {
      flexBasis: '50%',
      marginBottom: 0,
    },
    socialIcons: {
      flexBasis: '50%',
      justifyContent: 'flex-end',
    },
  },
  '@media (min-width: 1024px)': {
    innerContainer: {
      flexDirection: 'row',
    },
  },
};

export default Footer;
